import React from 'react';
import GalleryItem from './GalleryItem';

function Gallery(props: any) {
  const data = props.data.result.read()
    // renders a GalleryItem for each item in our data array
    // .map function iterates over the array and generates components that are displayed in the return below
    const display = data.map((item: any, index: any) => {
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
