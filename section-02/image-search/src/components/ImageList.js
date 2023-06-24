import React from 'react'
import ImageShow from './ImageShow'
import './ImageList.css'
const ImageList = ({ images }) => {
    const renderedImages = images?.map((image) => {
        return <ImageShow image={image} key={image.id} />
    })
    return (
        <div className='image-list' style={{
            columns: '6, 200px',
            columnGap: '10px'
        }}>
            {renderedImages}
        </div>
    )
}

export default ImageList