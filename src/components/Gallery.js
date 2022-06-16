import React, { useContext } from 'react'
import GalleryItem from './GalleryItem'

const Gallery = (props) => {
    // creates the data variable passed into app.js

    const display = props.data.map((item, index) => {
        return (
            <GalleryItem key={index} item={item} />
        )
    })

    return (
        <div>
            {display}
        </div>
    )
}

export default Gallery
