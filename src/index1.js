import {createStore,applyMiddleware,combineReducers} from 'redux';
import {Provider} from 'react-redux';
import {createLogger} from 'redux-logger';
import thunk from 'redux-thunk';
import createHistory from 'history/createBrowserHistory';
import {ConnectedRouter,routeReducer,routerMiddleware,push} from 'react-router-redux';


const history = createHistory();
const historyMiddleware = routerMiddleware(history);
import App from './containers/App';
import reducer from './reducers/reducers';
require('../style.less');

const logger = createLogger();

let store = createStore(
    combineReducers({
        ...reducer,
        router:routeReducer
    }),applyMiddleware(historyMiddleware,thunk,logger));
ReactDOM.render(
    <Provider store={store}>
        <App history={history}/>
    </Provider>,
    document.querySelector('#root')
);
