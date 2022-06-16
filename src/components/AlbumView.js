// with_router: added to send an albumId to this and populate the songs in that album
// with_router: import useParams and id to add functionality to URL bar (/artist/5 gives artist id search results)

import React, { useState } from 'react'
import { useParams } from 'react-router-dom'

function AlbumView() {
    const { id } = useParams()
    const [ albumData, setalbumData ] = useState([])

    return (
        <div>
            <h2>The id passed was: {id}</h2>
            <p>Album Data Goes Here!</p>
        </div>
    )
}

export default AlbumView
