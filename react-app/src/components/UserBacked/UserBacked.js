import { useSelector, useDispatch } from 'react-redux';
import {useParams} from 'react-router-dom';
import React, {useEffect} from '../../store/users';
import User from '../UsersPage/User'

function UserBacked() {
    //WILL NEED TO CHANGE THE STATE TO THE USER'S PROFILE INSTEAD OF CURRENT USER
    const sessionUser = useSelector(state => state.session.user)

    return (
        <div>
            <User users={sessionUser}/>
            <h2>hi</h2>
            

        </div>
    )
}

export default UserBacked;
