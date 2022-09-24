// with_router: added to send an albumId to this and populate the songs in that album
// with_router: import useParams and id to add functionality to URL bar (/artist/5 gives artist id search results)

import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

function AlbumView() {
    const { id } = useParams()
    const [ albumData, setAlbumData ] = useState([])
    const navigate = useNavigate()

    useEffect (()=> {
        const API_URL = `http://localhost:4000/song/${id}`
        const fetchData = async () => {
            const response = await fetch (API_URL)
            const resData = await response.json()
            setAlbumData(resData.results)
        }
        fetchData()
    }, [id])

    const justSongs = albumData.filter(entry => entry.wrapperType === 'track')

    const renderSongs = justSongs.map((song, i) => {
        return (
            <div key={i}>                
                <p>{song.trackName}</p>                  
            </div>
        )
    })

    const navButtons = () => {
        return (
            <div>
                <button onClick={() => navigate(-1)}>Back</button>
                |
                <button onClick={() => navigate('/')}>Home</button>
            </div>
        )
    }

    return (
        <div>
            {navButtons()}
            {renderSongs}
        </div>
    )
}

export default AlbumView