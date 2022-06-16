import React, { useEffect, useState } from 'react'
import Gallery from './components/Gallery'
import SearchBar from './components/SearchBar'
import { DataContext } from './context/DataContext'

function App(){
  // state components
    let [search, setSearch] = useState('')
    let [data, setData] = useState([])
    let [message, setMessage] = useState('Search for Music!')
    
    const API_URL = 'https://itunes.apple.com/search?term='

    // the hook
    useEffect(() => {
      // Core file in application
      // withContext2: the context provider for searchTerm and data variables
      // conditional added to prevent the state from running if there is no search term

      if(search) {
        const fetchData = async () => {
            document.title = `${search} Music`
            const response = await fetch(API_URL + search)
            const resData = await response.json()
            if (resData.results.length > 0) {
                setData(resData.results)
            } else {
                setMessage('Not Found')
            }
        }
        fetchData()
      }
  }, [search])
  
  // function to pass down to SearchBar with 2 arguements (event object and search term typed into searchbar)
  const handleSearch = (e, term) => {
    e.preventDefault()
    setSearch(term)
  }

  return (
      <div className="App">
          <SearchBar handleSearch = {handleSearch} />
          {message}
          
          {/* Formatted to be the context provider by wrapping Gallery in DataContext.Provider */}
          <DataContext.Provider value={data} >
            {/* anything passed into the value object will be available as Context to the child Gallery component */}
            <Gallery />
          </DataContext.Provider>
      </div>
  )
}

export default App
