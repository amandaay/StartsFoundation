import React, { createContext, useState, useMemo } from "react"
import PropTypes from "prop-types"

const SearchModalContext = createContext();

function SearchModalContextProvider({ children }) {
  const [isSearchModalOpen, setIsSearchModalOpen] = useState()

  const initialValue = useMemo(() => {
    return {
      isSearchModalOpen,
      openSearchModal: () => {
        setIsSearchModalOpen(true)
      },
      closeSearchModal: () => {
        setIsSearchModalOpen(false)
      },
    }
  })

  return (
    <SearchModalContext.Provider value={initialValue}>
      {children}
    </SearchModalContext.Provider>
  )
}

SearchModalContextProvider.propTypes = {
  children: PropTypes.any,
}
export { SearchModalContextProvider, SearchModalContext };
