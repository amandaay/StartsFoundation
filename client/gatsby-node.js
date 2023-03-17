// /**
//  * Implement Gatsby's Node APIs in this file.
//  *
//  * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/
//  */

/**
 * News Posts Pagination Section
 */
const pageSize = 6
/**
 * function that returns pagination for all News Posts
 * @param {array} data to be mapped
 * @param {function} createPage function from Gatsby
 * @returns createPage object
 */
const createNewsPagination = (allNewsPosts, createPage) => {
  const pageCount = Math.ceil(allNewsPosts.length / pageSize)
  return Array.from({ length: pageCount }).map((_, index) =>
    createPage({
      path: `/News/page=${index + 1}`,
      component: require.resolve(`./src/templates/news-posts.js`),
      context: {
        skip: index * pageSize,
        limit: pageSize,
        pageCount,
        currentPage: index + 1,
      },
    })
  )
}
//GraphQL query for all news
const allNewsQuery = `
  {
    allSanityNews(sort: { date: DESC }) {
      nodes {
        _id
        _rawBody
        slug {
          current
        }
        title
        date(formatString: "MMM Do, YYYY")
        image {
          alt
          asset {
            gatsbyImageData(width: 200, placeholder: BLURRED)
          }
        }
      }
    }
  }
`
/**
 * END OF NEWS POSTS PAGINATION -----------
 */

/**
 * function that creates single news posts pages
 * @param {*} allNewsPosts
 * @param {*} createPage
 * @returns single news posts pages
 */
const createNewsPost = (newsPost, createPage) => {
  return newsPost.forEach(post => {
    createPage({
      path: `/News/${post.slug.current}`,
      component: require.resolve("./src/templates/single-post.js"),
      context: { id: post._id },
    })
  })
}

// createBlogsPages Section
const blogsQuery = `
    {
      allSanityBlog(sort: { _createdAt: DESC }) {
        nodes {
          _id
          title
          _createdAt(formatString: "MMM Do, YYYY")
          author
          coverImage {
            asset {
              gatsbyImageData
            }
            alt
          }
          excerpt {
            children {
              text
            }
          }
          slug {
            current
          }
        }
      }
    }
  `

const createBlogsPages = async (blogs, createPage) => {
  const pageCount = Math.ceil(blogs.length / pageSize)
  return Array.from({ length: pageCount }).map((_, index) =>
    createPage({
      path: `/Blogs/page=${index + 1}`,
      component: require.resolve(`./src/templates/blogs-posts.js`),
      context: {
        skip: index * pageSize,
        limit: pageSize,
        pageCount,
        currentPage: index + 1,
      },
    })
  )
}

const createBlogPosts = async (blogs, createPage) => {
  return blogs.forEach(blog => {
    createPage({
      path: `/Blogs/${blog.slug.current}`,
      component: require.resolve(`./src/templates/single-blog.js`),
      context: {
        id: blog._id,
      },
    })
  })
}

/**
 * Create Pages function
 * @param {function} Gatsby methods
 */
exports.createPages = async ({ graphql, actions }) => {
  /**
   * Sanity CMS create news posts pagination and single news post page
   */
  const { createPage } = actions
  const resultNews = await graphql(allNewsQuery)
  if (resultNews.errors) throw resultNews.errors
  const allNewsPosts = resultNews.data.allSanityNews.nodes
  createNewsPagination(allNewsPosts, createPage)
  createNewsPost(allNewsPosts, createPage)

  /**
   * Sanity CMS create blog posts pagination and single blog post pages
   */
  const blogsResult = await graphql(blogsQuery)
  if (blogsResult.errors) throw blogsResult.errors
  const blogs = blogsResult.data.allSanityBlog.nodes
  createBlogsPages(blogs, createPage)
  createBlogPosts(blogs, createPage)
}
