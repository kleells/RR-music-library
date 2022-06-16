// with_router: added to send an artistId to this and generate results for the artist's music
// with_router: import useParams and id to add functionality to URL bar (/artist/5 gives artist id search results)
import { useParams } from 'react-router-dom'
import React, { useState } from 'react'


function ArtistView() {
    const { id } = useParams()
    const [ artistData, setArtistData ] = useState([])

    return (
        <div>
            <h2>The id passed was: {id}</h2>
            <p>Artist Data Goes Here!</p>
        </div>
    )
}

export default ArtistView
