import React, { useContext, useEffect, useState } from "react"
import { MdClose } from "react-icons/md"
import { SearchModalContext } from "../context/searchModalContext"
import "../styles/searchModal.css"
import SearchField from "./SearchField"

function Search() {
  const { isSearchModalOpen, openSearchModal, closeSearchModal } =
    useContext(SearchModalContext)

  const handleSearchModalOpen = () => {
    openSearchModal()
  }
  const [searchQuery, setSearchQuery] = useState("")
  const handleOnFocus = () => {
    console.log("focused")
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
          backgroundColor: "rgba(0,0,0,0.6 )",
        }}
      >
        <div className="searchDiv">
          <span className="closeBtn" onClick={() => closeSearchModal()}>
            <MdClose size={40} />
          </span>
          <SearchField
            value={searchQuery}
            setValue={setSearchQuery}
            onFocus={handleOnFocus}
          />
        </div>
      </div>
    </>
  )
}

export default Search
