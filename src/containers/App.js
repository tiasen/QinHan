import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {Router,Route,IndexRoute ,browserHistory } from 'react-router';
import {routeReducer,push} from 'react-router-redux';
// import {selectTab} from '../actions/actions';
import * as Actions from '../actions/actions';
import Content from '../components/Content';

class App extends React.Component{

    componentDidMount(){
        this.props.dispatch(push('/home'));
    }
    render(){
        const {dispatch,selectedTab,actions,history,data} = this.props;
        return <Content actions={actions}
                        history={history}
                        dispatch={dispatch}
                        selectedTab={selectedTab}
                        data={data}/>
    }
}
const mapStateToProps = state => {
    // console.log(state)
    const {selectedTab,getsList} = state;
    const {
        isFetching,
        data:data
    } = getsList[selectedTab] || {
        isFetching:true,
        data:[]
    }
    return {
        selectedTab,
        data,
        isFetching
    }
};
const mapDispatchToProps = dispatch => ({
    actions:bindActionCreators(Actions,dispatch),
    dispatch

});
export default connect(mapStateToProps,mapDispatchToProps)(App);
