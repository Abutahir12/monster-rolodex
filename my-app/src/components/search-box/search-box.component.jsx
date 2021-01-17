import React from 'react'
import './search-box.styles.css'

const SearchBox = ({placeholder, handleEvent}) =>
(
    <input
    className="search" 
    type="search" 
    placeholder={placeholder} 
    onChange={handleEvent} 
    />
)

export default SearchBox
