import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import LogoutButton from './auth/LogoutButton';
import SignupFormModal from './SignupFormModal';
import LoginFormModal from './LoginFormModal';
import './NavBar.css';


const NavBar = () => {
  const sessionUser = useSelector((state) => state.session.user);

  let sessionLinks;
  if(sessionUser){
    sessionLinks = (
      <>
        {/* <button type="button" className="user-button">
          <ProfileButton user={sessionUser} />
        </button> */}
        <div className="user-container">
            <button type="button" className="user-button">
            <NavLink to={`/users/${sessionUser.id}`}>Profile Page</NavLink>
            </button>
            </div>
      </>
    );
  }

  else {
  sessionLinks = (
    <div className="login-menu-right">
      <LoginFormModal />
      <SignupFormModal />
    </div>
    );
  }

  return (
    <nav>
      <ul>
        <li>
          <NavLink to='/' exact={true} activeClassName='active'>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to='/projects/new' exact={true} activeClassName='active'>
            Start a project
          </NavLink>
        </li>
        {/* <li>
          <NavLink to='/login' exact={true} activeClassName='active'>
            Login
          </NavLink>
        </li> */}
        {/* <li>
          <NavLink to='/sign-up' exact={true} activeClassName='active'>
            Sign Up
          </NavLink>
        </li> */}
        {/* <div>
          <SignupFormModal />
        </div>
        <div>
          <LoginFormModal />
        </div> */}
        {/* <li>
          <NavLink to='/users' exact={true} activeClassName='active'>
            Users
          </NavLink>
        </li> */}
        {/* <li>
          <NavLink to='/categories' exact={true} activeClassName='active'>
            Categories
          </NavLink>
        </li> */}
        <li>
          <LogoutButton />
        </li>
      </ul>
      <div className="nav-bar-right">
      {sessionLinks}
      </div>
    </nav>

  );
}

export default NavBar;
