import {createStore,applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import {createLogger} from 'redux-logger';
import thunk from 'redux-thunk';

import App from './containers/App';
import reducer from './reducers/reducers';
require('../style.less');

const logger = createLogger();

let store = createStore(reducer,applyMiddleware(thunk,logger));
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.querySelector('#root')
);
