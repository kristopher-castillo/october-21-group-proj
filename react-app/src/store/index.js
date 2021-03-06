import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import session from './session'
import categoriesReducer from './categories';
import projectReducer from './project';
import pledgeReducer from './pledge';
import userReducer from './users';
import searchReducer from './search'

const rootReducer = combineReducers({
  session,
  projects:projectReducer,
  categories:categoriesReducer,
  pledges:pledgeReducer,
  users: userReducer,
  search: searchReducer
});


let enhancer;

if (process.env.NODE_ENV === 'production') {
  enhancer = applyMiddleware(thunk);
} else {
  const logger = require('redux-logger').default;
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  enhancer = composeEnhancers(applyMiddleware(thunk, logger));
}

const configureStore = (preloadedState) => {
  return createStore(rootReducer, preloadedState, enhancer);
};

export default configureStore;
