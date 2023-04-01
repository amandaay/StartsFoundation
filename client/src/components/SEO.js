import React from "react"
import PropTypes from "prop-types"

export const SEO = props => {
  const { title, content } = props

  return (
    <>
      <meta charSet="utf-8" />
      <title>{title}</title>
      <meta name="description" content={content} />
    </>
  )
}

SEO.propTypes = {
  props: PropTypes.any,
  title: PropTypes.string,
  content: PropTypes.string,
}
