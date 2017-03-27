

import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'

import createHistory from 'history/createBrowserHistory'
import { Route } from 'react-router'

import { routerMiddleware } from 'react-router-redux';

import {createLogger} from 'redux-logger';
import thunk from 'redux-thunk';
const logger = createLogger();
import reducers from './reducers/reducers' // Or wherever you keep your reducers

import Router from './route';
// Create a history of your choosing (we're using a browser history in this case)
const history = createHistory()

// Build the middleware for intercepting and dispatching navigation actions
const middleware = routerMiddleware(history)

// Add the reducer to your store on the `router` key
// Also apply our middleware for navigating

const store = createStore(
    reducers,
    applyMiddleware(middleware,thunk)
)
require('../style.less');
// Now you can dispatch navigation actions from anywhere!
// store.dispatch(push('/foo'))

import Home from './containers/Home';
import Menu from './components/menu/Menu2';
import Cart from './containers/Cart';
import Personal from './containers/Personal';
import Tabs from './containers/Tabs2';
import App from './containers/App';

ReactDOM.render(
    <Provider store={store}>
        <Router history={history} />
    </Provider>,
    document.getElementById('root')
)