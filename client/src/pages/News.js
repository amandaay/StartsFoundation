import React, { useEffect } from "react"
import Layout from "../components/Layout"
import NewsPosts from "../templates/news-posts"


// function News({ pageContext }) {
//   const { pageCount, group, index, first, last } = pageContext
//   const previousIndex = index - 1
//   const nextIndex = index + 1

//   const previousPageUrl =
//     previousIndex === 1 ? "/News" : `/News/${previousIndex}`
//   const nextPageUrl = `/News/${nextIndex}`

//   return (
//     <Layout>
//       <div className="container newsContainer">
//         <h1 className="newsHeader">All News </h1>

//         <div className="row newsRow">
//           {group.map(post => (
//             <div className="col newsCol" key={post._id}>
//               <GatsbyImage
//                 className="imgs"
//                 image={post.image.asset.gatsbyImageData}
//                 alt={post.image.alt}
//               />
//               <div className="newsTitleDiv">
//                 <p className="newsTitle">{post.title}</p>
//               </div>
//               <div className="newsDateDiv">
//                 <p className="newsDate">{post.date}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//       <div className="pagination">
//         {!first && (
//           <Link to={previousPageUrl} className="previous-link">
//             Previous page
//           </Link>
//         )}

//         {!last && (
//           <Link to={nextPageUrl} className="previous-link">
//             Next page
//           </Link>
//         )}
//       </div>
//     </Layout>
//   )
// }

// News.propTypes = {
//   pageContext: PropTypes.any,
// }
// export default News

/**
 * PART 2
 *
 */

// function News({ data }) {

//   useEffect(() => {
//     const onTop = () => {
//       window.scrollTo(0, 0)
//     }
//     onTop()
//   }, [])

//   console.log("data", data)
//   const news = data.allSanityNews.nodes

//   return (
//     <Layout>
//       <div className="container newsContainer">
//         <h1 className="newsHeader">All News </h1>
//         <div className="row newsRow">
//           {news.map(item => (
//             <div className="col newsCol" key={item._id}>
//               <Link to={`/News/${item.slug.current}`}>
//                 <GatsbyImage
//                   className="imgs"
//                   image={item.image.asset.gatsbyImageData}
//                   alt={item.image.alt}
//                 />
//               </Link>
//               <div className="newsTitleDiv">
//                 <Link className="newsTitle" to={`/News/${item.slug.current}`}>
//                   {item.title}
//                 </Link>
//               </div>
//               <div className="newsDateDiv">
//                 <p className="newsDate">{item.date}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </Layout>
//   )
// }

// News.propTypes = {
//   data: PropTypes.any,
// }

// export const query = graphql`
//   {
//     allSanityNews(sort: { date: DESC }) {
//       nodes {
//         _id
//         slug {
//           current
//         }
//         title
//         date(formatString: "MMM Do, YYYY")
//         image {
//           alt
//           asset {
//             gatsbyImageData(width: 200, placeholder: BLURRED)
//           }
//         }
//       }
//     }
//   }
// `
// export default News


//TODO: redirect to pagination pages
function News() {
  useEffect(() => {
    const onTop = () => {
      window.scrollTo(0, 0)
    }
    onTop()
  }, [])

  return (
    <Layout>
      <NewsPosts />
    </Layout>
  )
}

export default News
