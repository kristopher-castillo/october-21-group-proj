import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { Redirect, useHistory, useParams } from "react-router-dom";
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getProjectThunk } from '../../store/project';

const SearchBar = (props) => {
    // const history = useHistory();
    const dispatch = useDispatch();
    const [searchTerm, setSearchTerm] = useState('')
    const searchState = useSelector(state => state.session.user);

    const projects = useSelector(state => Object.values(state.projects?.projects?.projects));

    useEffect(() => {
        (async() => {
          await dispatch(getProjectThunk());
          setSearchTerm('');
        })();
      }, [dispatch])




    return (
        <>
        <input
        type='search'
        placeholder={props.placeholder}
        // onChange={(e) => () {}}
        />
        <button type='submit'>submit</button></>
    )
}

export default SearchBar
