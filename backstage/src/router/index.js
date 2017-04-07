/**
 * Created by 365969 on 2017/3/27.
 */
import {Route,Redirect} from 'react-router';
import {ConnectedRouter,routeReducer,routerMiddleware,push} from 'react-router-redux';
import List from '../containers/menu/List';
import Basic from '../components/menu/Basic';
import AddItem from '../components/menu/AddItem';
export default class Routers extends React.Component{
    render(){
        const {history} = this.props;
        return (

            <ConnectedRouter history={history} >
                <div  >
                    <Route path="/backstage/home" render={() => (<div>home</div>)}/>
                    <Route path="/backstage/menu/basic" render={() => (<Basic />)} />
                    <Route exact path="/backstage/menu/list" render={() => (<List history={history} />)}/>
                    <Route path="/backstage/menu/list/add" render={() => (<AddItem history={history} />)}/>
                </div>
            </ConnectedRouter>

        )

    }
}
