import React, { useEffect } from "react"
import { navigate } from "gatsby"
import Layout from "../components/Layout"
import NewsPosts from "../templates/news-posts"
import PropTypes from "prop-types"

function News({ location }) {
  console.log("LOcation", location)
  useEffect(() => {
    location.pathname === "/News/"
      ? navigate("/News/page=1")
      : navigate(location.pathname)
  }, [])

  return (
   
    <Layout>
      <NewsPosts />
    </Layout>
  )
}
News.propTypes = {
  location: PropTypes.object,
}
export default News
