import { graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import React, { useEffect } from "react"
import PropTypes from "prop-types"
import Layout from "../components/Layout"
import { Pagination } from "../components/Pagination"
import "../styles/gallery-images.css"

export const galleryQuery = graphql`
  query allImagesQuery($skip: Int!, $limit: Int!) {
    allSanityGallery(limit: $limit, skip: $skip) {
      nodes {
        id
        image {
          alt
          asset {
            gatsbyImageData(width: 200, placeholder: BLURRED)
          }
        }
        caption
      }
    }
  }
`
function GalleryImages({ data, pageContext }) {
  useEffect(() => {
    const onTop = () => {
      if (window !== "undefined") {
        window.scrollTo(0, 0)
      }
    }
    onTop()
  }, [])

  const galleryImages = data.allSanityGallery.nodes

  return (
    <Layout>
      <div className="container galleryContainer">
        <h1 className="galleryHeader">Gallery</h1>
        <div className="row galleryRow">
          {galleryImages.map(item => (
            <div className="galleryCol" key={item.id}>
              <GatsbyImage
                className="imgs"
                image={item.image.asset.gatsbyImageData}
                alt={item.image.alt || ""}
              />
              <div className="imageCaption">{item.caption}</div>
            </div>
          ))}
        </div>
        <div className="paginateDiv">
          {pageContext.pageCount > 1 && (
            <Pagination
              currentPage={pageContext.currentPage}
              pageCount={pageContext.pageCount}
              base={"Gallery"}
            />
          )}
        </div>
      </div>
    </Layout>
  )
}

GalleryImages.propTypes = {
  data: PropTypes.object,
  pageContext: PropTypes.object,
}

export default GalleryImages
