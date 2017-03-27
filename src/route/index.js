/**
 * Created by 365969 on 2017/3/27.
 */
import {Route,Redirect} from 'react-router';
import {ConnectedRouter,routeReducer,routerMiddleware,push} from 'react-router-redux';
import Home from '../containers/Home';
import Menu from '../containers/Menu';
import Cart from '../containers/Cart';
import Personal from '../containers/Personal';
import Tabs from '../containers/Tabs2';


export default class Router extends React.Component{
    render(){
        const {history} = this.props;
        return (
            <ConnectedRouter history={history} >
                <div id="t-container" >
                    <Redirect to="/home" />
                    <Route path="/home" component={Home}/>
                    <Route path="/menu" component={Menu}/>
                    <Route path="/cart" component={Cart}/>
                    <Route path="/personal" component={Personal}/>
                    <Route path="*"  render={() => <Tabs history={history} />}/>
                </div>
            </ConnectedRouter>
        )

    }
}
