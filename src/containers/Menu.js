import {bindActionCrateors} from 'redux';
import {connect} from 'react-redux';
import { Toast } from 'antd-mobile';

import ClassList from './../components/menu/ClassList';
import MainList from './../components/menu/MainList';
import {selectTab,fetchGetsIfNeed} from '../actions/actions';

class Menu extends React.Component {
    constructor(...props){
        super(...props);
        this.state = {
            selectedClassIndex:0
        }
    }
    componentWillMount(){
        const {isFetching} = this.props;
        //console.log('componnetWillMount')
        //console.log(isFetching)
        if(isFetching){
            Toast.loading('加载中...', 0);
        }
    }
    componentDidMount(){

        //console.log(this);
        const {dispatch,isFetching} = this.props;

        //console.log(isFetching)
        //console.log(this.props);
        dispatch(fetchGetsIfNeed('menu'));
        if(!isFetching){
            Toast.hide();
        }
        // console.log(data)
        //Toast.loading('加载中...', 0);
    //debugger;
    }
    handleSelectClass(idx){
        this.setState({
            selectedClassIndex:idx
        })
    }

    render() {
        //return false;
        //debugger;
        const {data} = this.props;
        //console.log(data)
        if(data && data.length > 0){
            let classList = [];
            for (var key in data[0]){
                classList.push(key)
            }
            //console.log(classList)
            return (
                <div className="menu">
                    <div className="menu-left" style={{height:'100%'}}>
                        <ClassList onSelectClass={(idx) => this.handleSelectClass(idx)} list = {classList} />
                    </div>
                    <div className="menu-right"  style={{height:'100%'}}>
                        <MainList selectedClass = {classList[this.state.selectedClassIndex]} data = {data[0]} />
                    </div>
                </div>
            )
        }else{
            return null;
        }
    }
    componentDidUpdate(){
        //console.log(this.props.isFetching)
        if(!this.props.isFetching){
            Toast.hide();
        }
    }
}


const mapStateToProps = state => {
    //console.log(state);
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
        getsList,
        isFetching,
        data
    }
}
export default connect(mapStateToProps)(Menu)