import {Router,Route,IndexRedirect,browserHistory } from 'react-router';
import Home from './home/Home';
import Menu from './menu/Menu2';
import Cart from './cart/Cart';
import Personal from './personal/Personal';
export default class Content extends React.Component{
    render(){
        return (
            <Router history={browserHistory}>
                <Route path="/" >
                    <Route path="home" component={Home}/>
                    <Route path="menu" component={Menu}/>
                    <Route path="cart" component={Cart}/>
                    <Route path="personal" component={Personal}/>
                </Route>
            </Router>
        )
        return (
            <div tabsIndex = {this.props.tabsIndex} id="t-container">
                <div style={{width:'100%',height:'100%',overflow:'hidden'}}>{this.handleContent()}</div>
            </div>
        )
    }
}
