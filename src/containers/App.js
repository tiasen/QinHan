import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import Tabs from '../components/Tabs';
// import {selectTab} from '../actions/actions';
import * as Actions from '../actions/actions';
class App extends React.Component{

    componentDidMount(){
        console.log(this.props);
    }
    render(){
        const {dispatch,selectedTab,actions} = this.props;
        return <Tabs selectedTab={selectedTab}
                     actions = {actions}
                     onSelectTab = {(tab) => dispatch(Actions.selectTab(tab))} />
           
    }
}
const mapStateToProps = state => {
    const {selectedTab} = state;
    return {
        selectedTab
    }

};
const mapDispatchToProps = dispatch => ({
   actions:bindActionCreators(Actions,dispatch),
    dispatch
});
export default connect(mapStateToProps,mapDispatchToProps)(App);
