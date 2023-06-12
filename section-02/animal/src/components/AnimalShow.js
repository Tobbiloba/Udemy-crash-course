import React, { useState } from 'react'
import bird from './img/bird.svg'
import dog from './img/dog.svg'
import cat from './img/cat.svg'
import cow from './img/cow.svg'
import horse from './img/horse.svg'
import gator from './img/gator.svg'
import heart from './img/heart.svg'
import './AnimalShow.css'
const svgMap = {
    bird,
    cat,
    cow,
    dog,
    horse,
    gator,
}
const AnimalShow = ({ type }) => {
    const [click, setClick] = useState(0)
    const handleClick = () => {
        setClick(click + 1)
    }
    return (
        <div onClick={handleClick} className='animal-show'>
            <img alt="animal" src={svgMap[type]} className='animal' />
            <img alt="heart" src={heart} style={{
                width: 10 + 10 * click + 'px'
            }} className='heart' />
        </div>
    )
}

export default AnimalShow