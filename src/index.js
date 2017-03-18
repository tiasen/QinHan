import App from './components/App';
require('../style.less');
ReactDOM.render(
        <App />,
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