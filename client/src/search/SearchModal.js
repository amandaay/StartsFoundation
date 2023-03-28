import React, { useContext, useState } from "react"
import { MdClose } from "react-icons/md"
import { SearchModalContext } from "../context/searchModalContext"
import "../styles/searchModal.css"
import SearchField from "./SearchField"
import { graphql, useStaticQuery } from "gatsby"
import SearchResult from "./SearchResult"

const query = graphql`
  {
    localSearchBlog {
      publicIndexURL
      publicStoreURL
    }
    localSearchNews {
      publicIndexURL
      publicStoreURL
    }
  }
`
function Search() {
  const { isSearchModalOpen, closeSearchModal } = useContext(SearchModalContext)

  const [searchQuery, setSearchQuery] = useState("")
  const data = useStaticQuery(query)
  const [blogsIndexStore, setBlogsIndexStore] = useState(null)
  const [newsIndexStore, setNewsIndexStore] = useState(null)

  //destructure publicStoreURL and publicIndexURL properties from data
  const {
    publicStoreURL: blogsPublicStoreURL,
    publicIndexURL: blogsPublicIndexURL,
  } = data.localSearchBlog
  const {
    publicStoreURL: newsPublicStoreURL,
    publicIndexURL: newsPublicIndexURL,
  } = data.localSearchNews

  const handleOnFocus = async () => {
    if (blogsIndexStore && newsIndexStore) return

    const [blogsIndex, blogsStore, newsIndex, newsStore] = await Promise.all([
      fetch(blogsPublicIndexURL).then(response => response.json()),
      fetch(blogsPublicStoreURL).then(response => response.json()),
      fetch(newsPublicIndexURL).then(response => response.json()),
      fetch(newsPublicStoreURL).then(response => response.json()),
    ])

    console.log("blogsIndex", blogsIndex)
    setBlogsIndexStore({
      index: blogsIndex,
      store: blogsStore,
    })
    setNewsIndexStore({
      index: newsIndex,
      store: newsStore,
    })
  }

  if (!isSearchModalOpen) return null
  return (
    <>
      <div
        className="modalContainer"
        style={{
          position: "fixed",
          top: "0",
          bottom: "0",
          left: "0",
          right: "0",
          display: "grid",
          height: "100vh",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "rgba(0,0,0,0.8 )",
        }}
      >
        <div className="searchDiv">
          <span
            className="closeBtn"
            onClick={() => closeSearchModal()}
            onKeyDown={() => closeSearchModal}
          >
            <MdClose size={40} />
          </span>
          <SearchField
            value={searchQuery}
            setValue={setSearchQuery}
            tabIndex={0}
            onFocus={handleOnFocus}
            onKeyPress={handleOnFocus}
          />
          {searchQuery && blogsIndexStore && newsIndexStore && (
            <div className="searchResult">
              <div className="searchInnerDiv">
                <SearchResult
                  searchQuery={searchQuery}
                  blogsIndexStore={blogsIndexStore}
                  newsIndexStore={newsIndexStore}
                ></SearchResult>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default Search
