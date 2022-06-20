import React from 'react';
import GalleryItem from './GalleryItem';

function Gallery(props) {
  const data = props.data.result.read()
    // renders a GalleryItem for each item in our data array
    // .map function iterates over the array and generates components that are displayed in the return below
    const display = data.map((item, index) => {
        return (
            <GalleryItem item={item} key={index} />
        )
    })

    return (
        // displays the item rendered
        <div>
            {display}
        </div>
    )
}

export default Gallery
