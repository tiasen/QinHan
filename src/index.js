import App from './containers/App';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import mealApp from './reducers/reducers';
require('../style.less');

let store = createStore(mealApp);
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.querySelector('#root')
)
/*class App extends React.Component{
    render(){
        return (
            <div>
                app
            </div>
        )
    }
}

import {Router,Route,hashHistory} from 'react-router';
ReactDOM.render((
    <Router history={hashHistory}>
        <Router path="/" component={App} />
    </Router>
),document.querySelector('#root'))*/