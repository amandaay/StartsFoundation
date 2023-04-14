import React from "react"
import PropTypes from "prop-types"

export const SEO = props => {
  const { title, content, keywords } = props

  return (
    <>
      <meta charSet="utf-8" />
      <title>{title}</title>
      <meta name="description" content={content} />
      <meta name="keywords" content={keywords} />
    </>
  )
}

SEO.propTypes = {
  props: PropTypes.any,
  title: PropTypes.string,
  content: PropTypes.string,
  keywords: PropTypes.string,
}
