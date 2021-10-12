import React, { useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import {useHistory, Link, useParams } from "react-router-dom";
import { getProjectsThunk } from "../../store/categories";

function SpecificCategory() {
    const dispatch = useDispatch();
    const params = useParams()
    useEffect(() => {
        dispatch(getProjectsThunk(params.categoryId))
    }, [dispatch, params])
    return(
        null
    )
}

export default SpecificCategory
