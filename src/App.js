import './App.css'
import React, { useEffect, useState, Fragment, Suspense } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Gallery from './components/Gallery'
import SearchBar from './components/SearchBar'
import AlbumView from './components/AlbumView'
import ArtistView from './components/ArtistView'
import { createResource as fetchData } from './helper'
import Spinner from './components/Spinner'

function App(){
  // state components
    let [searchTerm, setSearchTerm] = useState("")
    let [message, setMessage] = useState('Search for Music!')
    let [data, setData] = useState(null)

    useEffect(() => {
        if (searchTerm) {
          setData(fetchData(searchTerm));
        }
      }, [searchTerm])
    
    // function to pass down to SearchBar with 2 arguements (event object and search term typed into searchbar)
    const handleSearch = (e, term) => {
        e.preventDefault()
        setSearchTerm(term)
    }

    const renderGallery = () => {
        if (data) {
          return (
            <Suspense fallback={<Spinner />}>
              <Gallery data={data} />
            </Suspense>
          );
        }
      };

    return (
      <div className="App">
      {/* {message} moved outside of the Router in order to view it on any page being viewed */}
      {message}
          {/* with_router: put components in to Router element */}
          <Router>
              {/* with_router: compenents in Routes will be rendered selectively and Fragment is used to to place more than one component into an element */}
              <Routes>
                  <Route path="/" element={
                      <Fragment>
                          <SearchBar handleSearch = {handleSearch}/>
                          {renderGallery()}
                      </Fragment>
                  } />
                  {/* with_router: prescribe parameter values using : character */}
                  <Route path="/album/:id" element={<AlbumView />} />
                  <Route path="/artist/:id" element={<ArtistView />} />
              </Routes>
          </Router>
      </div>
  )
}

export default App;