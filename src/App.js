import "./App.css";
import React, { useEffect, useState, Suspense } from 'react'
import Gallery from './components/Gallery'
import SearchBar from './components/SearchBar'
import { createResource as fetchData } from './helper'
import Spinner from './components/Spinner'

function App(){
  // state components
    let [searchTerm, setSearchTerm] = useState("")
    let [message, setMessage] = useState('Search for Music!')
    let [data, setData] = useState(null)

    // the hook
    useEffect(() => {
        if (searchTerm) {
            setData(fetchData(searchTerm));
        }
        }, [searchTerm]);

  // function to pass down to SearchBar with 2 arguements (event object and search term typed into searchbar)
    const handleSearch = (e, term) => {
      e.preventDefault()
      setSearchTerm(term)
    }

    const renderGallery = () => {
        if(data){
          return (
            <Suspense fallback={<Spinner />}>
              <Gallery data={data} />
            </Suspense>
          )
        }
      }
    
      return (
        <div className="App">
          <SearchBar handleSearch={handleSearch} />
          {message}
          {renderGallery()}
        </div>
      );
    }
    
    export default App;