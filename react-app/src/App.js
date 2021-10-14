import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import LoginForm from './components/auth/LoginForm';
// import SignUpForm from './components/auth/SignUpForm';
import NavBar from './components/NavBar';
import ProtectedRoute from './components/auth/ProtectedRoute';
import UsersList from './components/UsersList';
import CategoryList from './components/CategoryList/CategoryList';
import User from './components/User';
import ProjectForm from './components/ProjectForm';
import ProjectPage from './components/ProjectPage';
import { authenticate } from './store/session';

import PledgePage from './components/PledgePage';
import SpecificCategory from './components/SpecificCategory/SpecificCategory';
// import SearchBar from './components/SearchBar/SearchBar';
import EditForm from './components/EditForm';

function App() {
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    (async() => {
      await dispatch(authenticate());
      setLoaded(true);
    })();
  }, [dispatch]);

  if (!loaded) {
    return null;
  }

  return (
    <BrowserRouter>
      <NavBar />
      <CategoryList />
      <Switch>
        <Route path='/login' exact={true}>
          <LoginForm />
        </Route>
        {/* <Route path='/sign-up' exact={true}>
          <SignUpForm />
        </Route> */}
        <Route path='/projects/new' exact={true}>
          <ProjectForm />
        </Route>
        <Route path='/projects/:id/edit' exact={true}>
          <EditForm />
        </Route>
        <Route path='/projects/:id' exact={true}>
          <ProjectPage />
        </Route>
        <Route path='/categories' exact={true}>
          <CategoryList/>
        </Route>
        <Route path='/projects/:projectId/pledges'>
          <PledgePage />
        </Route>
        <Route path='/categories/:categoryId' exact={true}>
          <SpecificCategory />
        </Route>
        <ProtectedRoute path='/users' exact={true} >
          <UsersList/>
        </ProtectedRoute>
        <ProtectedRoute path='/users/:userId' exact={true} >
          <User />
        </ProtectedRoute>
        <ProtectedRoute path='/' exact={true} >
          <h1>My Home Page</h1>
        </ProtectedRoute>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
