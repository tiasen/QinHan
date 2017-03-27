import {Router,Route,IndexRedirect,browserHistory } from 'react-router';
import {ConnectedRouter,routeReducer,routerMiddleware,push} from 'react-router-redux';
import Home from './../containers/Home';
import Menu from './../containers/Menu';
import Cart from './../containers/Cart';
import Personal from './../containers/Personal';
import Tabs from './../containers/Tabs2';
import {selectTab,fetchGetsIfNeed} from '../actions/actions';

export default class Content extends React.Component{
    componentDidMount(){
        const {dispatch} = this.props;
    }
    render(){
        // console.log(this.props)
        const {history,selectedTab,dispatch,actions,data} = this.props;
        return (
            <ConnectedRouter history={history} >
                <div id="t-container" >
                    <Route path="/home" component={Home}/>
                    <Route path="/menu" render={() => <Menu dispatch={dispatch} data={data} /> }/>
                    <Route path="/cart" component={Cart}/>
                    <Route path="/personal" component={Personal}/>
                    <Route path="*"  render={() => <Tabs onSelecteTab={text => dispatch(selectTab(text))} selectedTab={selectedTab} history={history} />}/>
                </div>
            </ConnectedRouter>
        )

    }
}
