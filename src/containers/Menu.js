import {bindActionCrateors} from 'redux';
import {connect} from 'react-redux';
import { Toast,Popup, List, Button,Icon,Accordion ,Flex} from 'antd-mobile';

import ClassList from './../components/menu/ClassList';
import MainList from './../components/menu/MainList';
import {selectTab,fetchGetsIfNeed} from '../actions/actions';
import Count from '../components/menu/Count';
import Taste from '../components/menu/Taste';
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
    onClick = (data) => {
        console.log(data);
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
                            <Accordion.Panel header="口味" style={{display:data['taste'] && data['taste'].length > 0 }}>
                                <Taste data={data['taste']} />
                            </Accordion.Panel>
                            <Accordion.Panel header="标题二">
                                <List className="my-list">
                                    <Flex>
                                        <Flex.Item>
                                            <div>子内容一</div>
                                        </Flex.Item>
                                        <Flex.Item>
                                            <div>子内容一</div>
                                        </Flex.Item>
                                    </Flex>
                                    <Flex>
                                        <Flex.Item>
                                            <div>子内容一</div>
                                        </Flex.Item>

                                    </Flex>

                                </List>
                            </Accordion.Panel>
                        </Accordion>
                        <Count text="数量" onChooseNmber={(num) => this.onChangeNumber(num)} />
                    </div>
                </List>
                <ul style={{ padding: '0.18rem 0.3rem', listStyle: 'none' }}>
                    <li>投资说明投资说明...</li>
                    <li style={{ marginTop: '0.18rem' }}>
                        <Button type="primary" onClick={() => this.onClose('cancel')}>买入</Button>
                    </li>
                </ul>
            </div>, { animationType: 'slide-up', maskProps, maskClosable: false }
        );
    };
    onChangeNumber = (count) => {
        // console.log(val);
        this.setState({ count });
        console.log(this.state.val)
    }
    onClose = (sel) => {
        console.log(sel)
        this.setState({ sel });
        Popup.hide();
    };
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
                        <MainList onShowPopup={data => this.onClick(data)} selectedClass = {classList[this.state.selectedClassIndex]} data = {data[0]} />
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