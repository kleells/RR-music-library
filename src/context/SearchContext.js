// establish the default values of search context as properties of an object
// stores search term, replacing the search term state property
// stores the function that handles our context search
// provides the ref for our search input and the function that handles formatting the search (in Gallery.js)

import React, {createContext} from 'react'

export const SearchContext = createContext({
    term: '',
    handleSearch: () => {}
})
