import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import { Toast,Popup, List, Button,Icon,Accordion ,Flex} from 'antd-mobile';

import ClassList from './../components/menu/ClassList';
import MainList from './../components/menu/MainList';
import {selectTab,fetchGetsIfNeed,addToCart} from '../actions/actions';

import ErrorPage from '../components/common/ErrorPage';
import NullPage from '../components/common/NullPage';
import PopupList from '../components/common/PopupList';
const isIPhone = new RegExp('\\biPhone\\b|\\biPod\\b', 'i').test(window.navigator.userAgent);
let maskProps;
if (isIPhone) {
    // Note: the popup content will not scroll.
    maskProps = {
        onTouchStart: e => e.preventDefault()
    };
}

/**
 * state:
 *      selectedClassIndex:选中类别的index，默认为第一个
 *      sel: popup 显示隐藏 *
 */
class Menu extends React.Component {
    constructor(...props){
        super(...props);
        this.state = {
            selectedClassIndex:0,
            sel:''
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

        const {dispatch,isFetching,isFailed} = this.props;
        dispatch(fetchGetsIfNeed('menu'));
        if(!isFetching){
            Toast.hide();
        }
        //if(isFailed){
        //    Toast.fail('加载失败。。。',3)
        //}
    }
    //componentWillReceiveProps(nextProps){
    //    console.log('nextProps',nextProps)
    //}
    handleSelectClass(idx){
        this.setState({
            selectedClassIndex:idx
        })
    }
    onClick = (d) => {


        Popup.show(
            <PopupList d={d} onClose = {(sel,d) =>this.onClose(sel,d)} />, { animationType: 'slide-up', maskProps, maskClosable: false }
        );
    };


    onClose = (sel,d) => {
        //console.log(d)
        //console.log(this.props)
        if(d){
            this.props.dispatch(addToCart(d))
        }
        this.setState({ sel });
        Popup.hide();
    };
    reloadData = () => {
        Toast.loading('加载中...', 0);
        this.props.dispatch(fetchGetsIfNeed('menu'));
    };
    render() {
        const {data,isFetching,isFailed} = this.props;
        if(isFetching){
            return null;
        } else if(isFailed){
            return <ErrorPage onReloadData={() => this.reloadData()} />
        }else{
            if(data && data.length > 0){
                let classList = [];
                for (var key in data[0]){
                    classList.push(key)
                }
                return (
                    <div className="menu">
                        <div className="menu-left" style={{height:'100%'}}>
                            <ClassList onSelectClass={(idx) => this.handleSelectClass(idx)} list = {classList} />
                        </div>
                        <div className="menu-right"  style={{height:'100%'}}>
                            <MainList onShowPopup={data => this.onClick(data)} selectedClass = {classList[this.state.selectedClassIndex]} data = {data[0]} />
                        </div>
                    </div>
                )
            }else{
                return <NullPage />;
            }
        }

    }
    componentDidUpdate(){
        const {isFetching,data} = this.props;
        if(!isFetching){
            Toast.hide();
        }
    }
}


const mapStateToProps = state => {
    const {selectedTab,getsList} = state;
    const {
        isFetching,
        data:data,
        isFailed
        } = getsList[selectedTab] || {
        isFetching:true,
        data:[],
        isFailed:false
    }
    return {
        selectedTab,
        getsList,
        isFetching,
        data,
        isFailed
    }
}
const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        addToCart:addToCart
    },dispatch)
}
export default connect(mapStateToProps)(Menu)