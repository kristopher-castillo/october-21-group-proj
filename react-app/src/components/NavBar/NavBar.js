import React, {useState} from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import LogoutButton from '../auth/LogoutButton';
import SignupFormModal from '../SignupFormModal';
import LoginFormModal from '../LoginFormModal';
import LoginForm from '../LoginFormModal/LoginForm';
import { Modal } from "../../context/Modal";
import SearchBar from '../SearchBar/SearchBar';
import './NavBar.css';

const NavBar = () => {
  const [showModal, setShowModal] = useState(false);
  const sessionUser = useSelector((state) => state.session.user);

  let sessionLinks;
  let startProject;
  if (sessionUser) {
    sessionLinks = (
      <>
        <div className="user-container">
          <button type="button" className="user-button">
            <NavLink to={`/users/${sessionUser.id}`}>Profile Page</NavLink>
            </button>
            <LogoutButton />
            </div>
      </>


    );

    startProject = (
      <button className="start-project-button">
        <NavLink to='/projects/new' exact={true} activeClassName='active'>
             Start a project
        </NavLink>
      </button>   
      );
  } else {
    sessionLinks = (
      <>
      <div className="login-menu-right">
        <LoginFormModal />
        <SignupFormModal />
      </div>
      </>
    );

    startProject = (
      <>
      <button className="start-project-button" onClick={() => setShowModal(true)}>
        Start a project
      </button>
      {showModal && (<Modal onClose={() => setShowModal(false)}>
        <LoginForm />
      </Modal>
      )}
      </>
    
    );
  }

  return (
    <nav>
      <div className="nav-bar-container">
        <div className="nav-bar-left">
          {/* <button className="discover-button">
            <NavLink to='/discover' exact={true} activeClassName='active'>
             Discover
           </NavLink>
          </button> */}
          {startProject}
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
