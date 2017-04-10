/**
 * Created by 365969 on 2017/4/6.
 */
import {Route,Redirect} from 'react-router';
import {ConnectedRouter,routeReducer,routerMiddleware,push} from 'react-router-redux';

export default class Routers extends React.Component{
    render(){
        const {history} = this.props;
        return (

            <ConnectedRouter history={history} >
                <div  >
                    <Route path="/backstage/home" render={() => (<div>home</div>)}/>
                    <Route path="/backstage/menu/*" render={() => (<div>menu</div>)}/>
                </div>
            </ConnectedRouter>

        )

    }
}
