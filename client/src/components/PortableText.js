import React from "react"
import { PortableText } from "@portabletext/react"
import PropTypes from "prop-types"

function PortableTextComponent({ value }) {
  return <PortableText value={value} />
}

PortableTextComponent.propTypes = {
  value: PropTypes.array,
}
export default PortableTextComponent
