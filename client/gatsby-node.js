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
//     path: "/using-dsg",
//     component: require.resolve("./src/templates/using-dsg.js"),
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
//     pageTemplate: "/src/templates/post.js",
//     pageLength: 9,
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

exports.createPages = async ({ graphql, actions }) => {
  //template paths (resolving paths)
  const singlePostTemplate = require.resolve("./src/templates/single-post.js")
  const { createPage } = actions
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
