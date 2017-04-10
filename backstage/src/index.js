/**
 * Created by 365969 on 2017/4/5.
 */
import {Layout,Header,Sider,Content,Footer} from 'antd';
import {createStore,applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import createHistory from 'history/createBrowserHistory';
import {routerMiddleware} from 'react-router-redux';
import {createLogger} from 'redux-logger';
import thunk from 'redux-thunk';
const logger = createLogger();
const history = createHistory();
const middleware = routerMiddleware(history);

import reducers from './reducers';

const store = createStore(
    reducers,
    applyMiddleware(middleware,thunk,logger)
)

import Page from './containers/Page';
import Nav from './components/Nav.js';
require('../index.less');
ReactDOM.render(
    <Provider store={store} >
        <Page history={history}  />
    </Provider>,
    document.querySelector("#root")
);
