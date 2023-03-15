// /**
//  * Implement Gatsby's Node APIs in this file.
//  *
//  * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/
//  */

// /**
//  * @type {import('gatsby').GatsbyNode['createPages']}
//  */
// exports.createPages = async ({ actions }) => {
//   const { createPage } = actions
//   createPage({
//     path: "/News",
//     component: require.resolve("./src/templates/news-posts.js"),
//     context: {},
//     defer: true,
//   })
// // }
// const path = require(`path`)
// const { createFilePath } = require(`gatsby-source-filesystem`)
// const createPaginatedPages = require("gatsby-paginate")

// exports.createPages = async ({ graphql, actions, reporter }) => {
//   const { createPage } = actions
//   const newsPost = path.resolve(`./src/templates/post.js`)
//   const result = await graphql(`
//     {
//       allSanityNews(sort: { date: DESC }, limit: 10) {
//         nodes {
//           _id
//           slug {
//             current
//           }
//           title
//           date(formatString: "MMM Do, YYYY")
//           image {
//             alt
//             asset {
//               gatsbyImageData(width: 200, placeholder: BLURRED)
//             }
//           }
//         }
//       }
//     }
//   `)
//   if (result.errors) {
//     reporter.panicOnBuild(
//       `There was an error loading the news posts`,
//       result.errors
//     )
//     return
//   }
//   const posts = result.data.allSanityNews.nodes

//   createPaginatedPages({
//     //edges is the array of nodes that comes from the GraphQL query.
//     edges: posts,
//     createPage,
//     pageTemplate: "/src/templates/news-posts.js",
//     pageLength: 6,
//     // pathPrefix:"/news"
//   })

//   if (posts.length > 0) {
//     posts.forEach((post, index) => {
//       const previousPostId = index === 0 ? null : posts[index - 1].id
//       const nextPostId = index === posts.length - 1 ? null : posts[index + 1].id
//       createPage({
//         path: post.slug.current,
//         component: newsPost,
//         context: {
//           id: post.id,
//           previousPostId,
//           nextPostId,
//         },
//       })
//     })
//   }
// }

/**
 * Pagination section
 */
const pageSize = 6
/**
 * function that returns pagination for all News Posts
 * @param {array} data to be mapped
 * @param {function} createPage function from Gatsby
 * @returns createPage object
 */
const createPaginationPages = (newsPost, createPage) => {
  const pageCount = Math.ceil(newsPost.length / pageSize)
  console.log("create pagintaion")
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
//GraphQL query for News Page pagination
const newsResults = `
  {
    allSanityNews(sort: { date: DESC }) {
      nodes {
        _id
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
 * END OF CREATE PAGINATION METHOD SECTION-----------
 */

/**
 * Create Pages function
 * @param {function} Gatsby methods
 */
exports.createPages = async ({ graphql, actions }) => {
  /**
   * Pagination for news pages
   */
  const { createPage } = actions
  const resultNews = await graphql(newsResults)
  if (resultNews.errors) throw resultNews.errors
  const newsPosts = resultNews.data.allSanityNews.nodes
  createPaginationPages(newsPosts, createPage)

  /**
   * Sanity CMS
   */

  //template paths (resolving paths)
  const singlePostTemplate = require.resolve("./src/templates/single-post.js")

  const result = await graphql(`
    {
      allSanityNews {
        nodes {
          _id
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
          _rawBody
        }
      }
      
  `)
  if (result.errors) throw result.errors
  const newsPost = result.data.allSanityNews.nodes
  
  //single news post pages
  newsPost.forEach(post => {
    createPage({
      path: `/News/${post.slug.current}`,
      component: singlePostTemplate,
      context: { id: post._id },
    })
  })

  
}
