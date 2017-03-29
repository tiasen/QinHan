import {bindActionCrateors} from 'redux';
import {connect} from 'react-redux';
import { Toast,Popup, List, Button,Icon,Accordion ,Flex} from 'antd-mobile';

import ClassList from './../components/menu/ClassList';
import MainList from './../components/menu/MainList';
import {selectTab,fetchGetsIfNeed} from '../actions/actions';
import Count from '../components/menu/Count';
import Taste from '../components/menu/Taste';
import Size from '../components/menu/Size';
import ErrorPage from '../components/common/ErrorPage';
import NullPage from '../components/common/NullPage';

const isIPhone = new RegExp('\\biPhone\\b|\\biPod\\b', 'i').test(window.navigator.userAgent);
let maskProps;
if (isIPhone) {
    // Note: the popup content will not scroll.
    maskProps = {
        onTouchStart: e => e.preventDefault(),
    };
}
class Menu extends React.Component {
    constructor(...props){
        super(...props);
        this.state = {
            selectedClassIndex:0,
            sel:'',
            count: 1
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
    onClick = (data) => {
        Popup.show(
            <div>
                <List renderHeader={
                    () => (
                        <div style={{ position: 'relative' }}>
                          {data.name}
                          <span style={{position: 'absolute', right: 3, top: -5}}
                                onClick={() => this.onClose('cancel')}>
                            <Icon type="cross" />
                          </span>
                        </div>
                    )}
                      className="popup-list"
                >
                    <div style={{ marginTop: 10, marginBottom: 10 }}>
                        <Accordion defaultActiveKey="0" className="my-accordion" accordion={true}>
                            <Accordion.Panel header="大小份" style={{display:data['size'] && data['size'].length > 0 ? 'block':'none' }}>
                                {data['size'] && data['size'].length > 0 ?<Size onSizeSelected={sizeObj => this.onSizeSelected(sizeObj)} data={data['size']} /> : []}
                            </Accordion.Panel>
                            <Accordion.Panel header="口味" style={{display:data['taste'] && data['taste'].length > 0 ? 'block':'none' }}>
                                {data['taste'] && data['taste'].length > 0 ? <Taste onTasteSelected={tasteObj => this.onTasteSelected(tasteObj)} data={data['taste']} /> : []}
                            </Accordion.Panel>
                        </Accordion>
                        <Count text="份数" onChooseNmber={(num) => this.onChangeNumber(num)} />

                    </div>
                </List>
                <ul style={{ padding: '0.18rem 0.3rem', listStyle: 'none' }}>
                    <li>小计：<span style={{color:'#f00'}}>￥ {data.price}</span></li>
                    <li style={{ marginTop: '0.18rem' }}>
                        <Button type="primary" onClick={() => this.onClose('cancel')}>加入点菜单</Button>
                    </li>
                </ul>
            </div>, { animationType: 'slide-up', maskProps, maskClosable: false }
        );
    };
    onTasteSelected(taste){
        console.log(taste);
    }
    onSizeSelected(size){
        console.log(size)
    }
    onChangeNumber = (count) => {
        this.setState({ count });
    };
    onClose = (sel) => {
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
        if(!this.props.isFetching){
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
export default connect(mapStateToProps)(Menu)