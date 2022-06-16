import React, { useEffect, useState } from 'react'
import Gallery from './components/Gallery'
import SearchBar from './components/SearchBar'

function App(){
  // state components
    let [search, setSearch] = useState('')
    let [message, setMessage] = useState('Search for Music!')
    let [data, setData] = useState([])

    const API_URL = 'https://itunes.apple.com/search?term='

    // the hook
    useEffect(() => {
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
      <div>
          <SearchBar handleSearch = {handleSearch} />
          {message}
          {/* data being sent to Gallery component to be viewed */}
          <Gallery data={data} />
      </div>
  )

}

export default App
