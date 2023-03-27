/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */

require("dotenv").config("./.env")
const sanityConfig = require("./sanity-config.js")

module.exports = {
  siteMetadata: {
    title: `Starts Foundation Website`,
    description: ``,
    author: ``,
    siteUrl: `http://www.startsfoundation.org`,
  },
  proxy: {
    prefix: "/api",
    url: "http://localhost:5001",
  },

  plugins: [
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: "gatsby-source-sanity",
      options: {
        ...sanityConfig,
        watchMode: true,
      },
    },
    {
      resolve: "gatsby-plugin-local-search",
      options: {
        name: "blog",
        engine: "flexsearch",
        engineOptions: {
          tokenize: "forward",
        },
        query: `
        {
          allSanityBlog{
            nodes{
              id
              title
              author
              _createdAt
              coverImage{
                asset{
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
        `,
        ref: "id",
        index: ["title"],
        store: ["id", "title", "_createdAt", "slug", "coverImage"],
        normalizer: ({ data }) =>
          data.allSanityBlog.nodes.map(node => ({
            id: node.id,
            title: node.title,
            author: node.author,
            createdAt: node._createdAt,
            slug: node.slug,
            coverImage: node.coverImage,
          })),
      },
    },
    {
      resolve: "gatsby-plugin-local-search",
      options: {
        name: "news",
        engine: "flexsearch",
        engineOptions: {
          tokenize: "forward",
        },
        query: `
        {
          allSanityNews {
              nodes {
                id
                slug {
                  current
                }
                title
                date
                image {
                  alt
                  asset {
                    gatsbyImageData
                  }
                }
              }
            }
          }
        `,
        ref: "id",
        index: ["title"],
        store: ["id", "title", "date", "slug", "image"],
        normalizer: ({ data }) =>
          data.allSanityNews.nodes.map(node => ({
            id: node.id,
            title: node.title,
            date: node.date,
            slug: node.slug,
            image: node.image,
          })),
      },
    },
    
  ],
}
