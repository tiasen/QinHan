import Tabs from '../components/Tabs';
import TopNavBar from '../components/TopNavBar';
import Content from '../components/Content'
import {tabsChangedFn} from '../actions/actions';
import {connect} from 'react-redux';
 class App extends React.Component{
    render(){
        console.log(this.props);
        const {dispatch} = this.props;
        return <Tabs onHandleClick = {(text) => dispatch(tabsChangedFn(text))}/>
           
    }
}
export default connect()(App);
