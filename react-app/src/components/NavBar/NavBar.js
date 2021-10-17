import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import LogoutButton from '../auth/LogoutButton';
import SignupFormModal from '../SignUpFormModal';
import LoginFormModal from '../LoginFormModal';
import SearchBar from '../SearchBar/SearchBar';
import './NavBar.css';

const NavBar = () => {
  const sessionUser = useSelector((state) => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <>
        {/* <button type="button" className="user-button">
          <ProfileButton user={sessionUser} />
        </button> */}
        <div className="user-container">
          <button type="button" className="user-button">
            <NavLink to={`/users/${sessionUser.id}`}>Profile Page</NavLink>
            </button>
            <LogoutButton />
            </div>
      </>
    );
  } else {
    sessionLinks = (
      <div className="login-menu-right">
        <LoginFormModal />
        <SignupFormModal />
      </div>
    );
  }

  return (
    <nav>
      <div className="nav-bar-container">
        <div className="nav-bar-left">
          <button className="discover-button">
            <NavLink to='/discover' exact={true} activeClassName='active'>
             Discover
           </NavLink>
          </button>
          <button className="start-project-button">
            <NavLink to='/projects/new' exact={true} activeClassName='active'>
             Start a project
            </NavLink>
          </button>
      </div>
      <div className="nav-bar-center">
        <div className="nav-bar-center-logo">
          <NavLink to="/">
          <button type="button" className="nav-bar-logo-button">
          </button>
          </NavLink>
        </div>
      </div>
      <div className="nav-bar-right">
      <SearchBar />
      {sessionLinks}
      </div>
      </div>
    </nav>
  );
};

export default NavBar;
