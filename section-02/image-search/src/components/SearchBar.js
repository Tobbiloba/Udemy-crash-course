import React, { useState, useEffect } from 'react'
import './SearchBar.css'
const SearchBar = ({ onSubmit }) => {
    const [term, setTerm] = useState('')
    const handleFormSubmit = (e) => {
        e.preventDefault()
        onSubmit(term)
    }
    const handleInputChange = (e) => {
        setTerm(e.target.value)
    }
    useEffect(() => {
        onSubmit(term)
        setTerm('cars')

        // console.log('worked')
    }, [])
    // console.log(term)
    return (
        <div className='search-bar'>
            <form onSubmit={handleFormSubmit} className='search-bar_form'>
                <label>Enter Search Term</label>
                <input onChange={handleInputChange} value={term} placeholder='Input Image term' />
            </form>

        </div>
    )
}

export default SearchBar