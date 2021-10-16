import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getUserProjectsThunk } from '../../store/users';
import { useDispatch, useSelector } from 'react-redux';
import './UserPage.css'
function User() {
  const [user, setUser] = useState({});
  const { userId }  = useParams();


  useEffect(() => {
    if (!userId) {
      return;
    }
    (async () => {
      const response = await fetch(`/api/users/${userId}`);
      const user = await response.json();
      setUser(user);
    })();
  }, [userId]);

  if (!user) {
    return null;
  }

  return (
    <div className="profile-page-container">
      <div className="profile-header-container">
        <div className="profile_image_container">
          <img
            id="user-profile-picture"
            src="https://lh3.googleusercontent.com/8ARJK-vCzk0s6N-CWLkGcT3pOTBNbcbXMoyuQCwmcc-WiVkzcOOigaKK96F0N6rl8BPZ6g=s85"
            alt=""
          />
        </div>
        <div className="profile_header_container">
          <h2>{user.username}</h2>
        </div>
      </div>
      <div className="profile-nav-container">
        <ul className="profile-page-tabs">
          <li className="profile-tab-item">
            <Link to={`/users/${userId}/projects`}>Projects</Link>
          </li>
          <li className="profile-tab-item">
            <Link to={`/users/${userId}/backed`}>Backed</Link>
          </li>
          <li className="profile-tab-item">
            <Link to={`/users/${userId}/funds`}>Your Funds: {user.money}</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
export default User;
