import React from 'react'

const SearchBar = (props) => {
    return (
        <><input type='search'
            placeholder={props.placeholder}
            onChange={props.handleChange} /><button type='submit'>submit</button></>
    )
}

export default SearchBar
