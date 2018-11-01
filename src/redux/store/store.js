import { createStore, applyMiddleware, compose } from 'redux';
import { connectRouter } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';

export const history = createBrowserHistory();


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore (connectRouter(history)(rootReducer), composeEnhancers(applyMiddleware(thunk)));

export default store;