import GalleryItem from './GalleryItem'

function Gallery(props){
    // renders a GalleryItem for each item in our data array
    // .map function iterates over the array and generates components that are displayed in the return below
    const display = props.data.map((item, index) => {
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
