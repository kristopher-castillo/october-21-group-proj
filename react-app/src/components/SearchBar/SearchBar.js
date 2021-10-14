import React from 'react'
import { useState, useHistory } from 'react'
import { useSelector } from 'react-redux';

const SearchBar = (props) => {
    // const history = useHistory();
    const searchState = useSelector(state => state.session.user);



    return (
        <>
        <input
        type='search'
        placeholder={props.placeholder}
        onChange={props.handleChange}
        />
        <button type='submit'>submit</button></>
    )
}

export default SearchBar
