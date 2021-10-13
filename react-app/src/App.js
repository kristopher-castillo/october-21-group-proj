import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import LoginForm from './components/auth/LoginForm';
import SignUpForm from './components/auth/SignUpForm';
import NavBar from './components/NavBar';
import ProtectedRoute from './components/auth/ProtectedRoute';
import UsersList from './components/UsersList';
import CategoryList from './components/CategoryList/CategoryList';
import User from './components/User';
import ProjectForm from './components/ProjectForm';
import ProjectPage from './components/ProjectPage';
import { authenticate } from './store/session';
import SpecificCategory from './components/SpecificCategory/SpecificCategory';
import SearchBar from './components/SearchBar/SearchBar';


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
      <SearchBar placeholder='search' handleChange={(e) => console.log({searchBar:e.target.value}, '<--------search bar')} />
        <Route path='/login' exact={true}>
          <LoginForm />
        </Route>
        <Route path='/sign-up' exact={true}>
          <SignUpForm />
        </Route>
        <Route path='/projects/new' exact={true}>
          <ProjectForm />
        </Route>
        <Route path='/projects/:id' exact={true}>
          <ProjectPage />
        </Route>
        <Route path='/categories' exact={true}>
          <CategoryList/>
        </Route>
        <Route path='/categories/:categoryId'>
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
