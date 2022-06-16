// withContext2: searchBar will access the searchTerm variable from context

import React, { useState } from 'react'

function SearchBar(props){
    let [searchTerm, setSearchTerm] = useState('')

    return (
        // props.handleSearch implements the functionality sent down from app.js parent
        <form onSubmit={(e) => props.handleSearch(e, searchTerm)}>
            <input type="text" placeholder="Enter a search term here"
            // function the renders results when text is entered into searchbar
            onChange={
                // event that searches at the user types to render results in real time
                (e) => props.handleSearch(e, e.target.value)} />
            <input type="submit" />

        </form>
    )
}

export default SearchBar
    