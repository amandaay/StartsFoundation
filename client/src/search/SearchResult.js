import React from "react"
import { useFlexSearch } from "react-use-flexsearch"
import PropTypes from "prop-types"
import { BlogsSearchResultItem,NewsSearchResultItem } from "./SearchResultItem"
import "../styles/SearchResults.css"

function SearchResult({ searchQuery, blogsIndexStore, newsIndexStore }) {

  const blogsResult = useFlexSearch(
    searchQuery,
    JSON.stringify(blogsIndexStore.index),
    blogsIndexStore.store
  )

  const newsResult = useFlexSearch(
    searchQuery,
    JSON.stringify(newsIndexStore.index),
    newsIndexStore.store
  )

  if (blogsResult.length === 0 && newsResult.length === 0) {
    return (
      <div className="noResultsDiv">
        <h1 className="noResults">No Results Found</h1>
      </div>
    )
  }

  return (
    <>
      {blogsResult.length > 0 && (
        <>
          <div className="searchResultTitle">Blogs</div>
          {blogsResult.map(result => (
            <BlogsSearchResultItem key={result.id} blog={result} />
          ))}
        </>
      )}
      {newsResult.length > 0 &&(
        <>
            <div className="searchResultTitle">News</div>
            {newsResult.map(result=>(
                <NewsSearchResultItem key={result.id} news={result}/>
            ))}
        </>
      )}
    </>
  )
}

SearchResult.propTypes = {
  searchQuery: PropTypes.any,
  blogsIndexStore: PropTypes.any,
  newsIndexStore: PropTypes.any,
}
export default SearchResult
