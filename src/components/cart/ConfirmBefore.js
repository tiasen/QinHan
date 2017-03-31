/**
 * Created by 365969 on 2017/3/31.
 */
import { Card, Button,Flex,SwipeAction,Popup} from 'antd-mobile';
import EasyScroller from '../../lib/scroller/EasyScroller';
import PopupList from '../common/PopupList';

const isIPhone = new RegExp('\\biPhone\\b|\\biPod\\b', 'i').test(window.navigator.userAgent);
let maskProps;
if (isIPhone) {
    // Note: the popup content will not scroll.
    maskProps = {
        onTouchStart: e => e.preventDefault()
    };
}
export default class ConfirmBefore extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            myScroller:{}
        }
    }
    componentDidMount(){
        this.setState({
            myScroller:new EasyScroller(this.refs.scroller)
        })
    }
    onModify(data,index){
        console.log(this);
        const {onStateChangeModify,addToCart} = this.props;
        onStateChangeModify();
        Popup.show(
            <PopupList isModify={true} d = {data} currentIndex = {index} onClose = {(sel,d) =>this.onClose(sel,d)} />, { animationType: 'slide-up', maskProps, maskClosable: false }
        );

    }
    onClose(sel,d){
        this.setState({ sel });
        Popup.hide();
    }
    render(){
        const {addToCart} = this.props;
        return (
        <div style={{height:'100%',padding:15,boxSizing:'border-box'}}>
            <Card style={{height:'100%',padding:0}}>
                <Card.Header className="cart-confirm-before-header" title={
                    <Flex wrap={'nowrap'} >
                        <Flex.Item>
                            <span className="name">title</span>
                        </Flex.Item>
                        <Flex.Item>
                            <span className="count"><small>总份数:&nbsp;{addToCart.sum}</small></span>
                        </Flex.Item>
                        <Flex.Item>
                            <span className="total"><small>总计:&nbsp;{addToCart.total}&nbsp;元</small></span>
                        </Flex.Item>
                    </Flex>
                } />

                <Card.Body style={{position:'relative',overflow:"hidden",padding:10}}>
                        <ul ref="scroller" className="cart-confirm-before-list" style={{width:'100%',position:'absolute',left:0,top:0}}>
                            {addToCart.list.map((item,i) => {
                                return (
                                    <li key={i}>
                                        <SwipeAction
                                            autoClose
                                            right={[
                                                {
                                                  text: '修改',
                                                  onPress: () => {this.onModify(item,i)},
                                                  style: { backgroundColor: '#108ee9', color: 'white' },
                                                },
                                                {
                                                  text: '删除',
                                                  onPress: () => console.log('删除'),
                                                  style: { backgroundColor: '#F4333C', color: 'white' },
                                                }
                                              ]}
                                        >
                                            <header>
                                            <Flex wrap={'nowrap'}>
                                                <Flex.Item>
                                                    <span className="name">{item.name}</span>
                                                </Flex.Item>
                                                <Flex.Item>
                                                    <span className="count"><small>份数:&nbsp;{item.count}</small></span>
                                                </Flex.Item>
                                                <Flex.Item>
                                                    <span className="total"><small>小计:&nbsp;{item.subtotal}&nbsp;元</small></span>
                                                </Flex.Item>
                                            </Flex>
                                            </header>
                                            <section>
                                                <p style={{display:item.size ? 'block' : 'none'}}>份量：{ item.size.name}</p>
                                                <p style={{display:item.taste ? 'block' : 'none'}}>口味：{ item.taste.name}</p>
                                                <p style={{display:item.otherDemand && item.otherDemand.length > 0 ? 'block' : 'none'}}>
                                                    其他需求：{item.otherDemand && item.otherDemand.length > 0 ? item.otherDemand.join('、').toString():''}
                                                </p>
                                            </section>
                                        </SwipeAction>
                                    </li>
                                )
                            })}
                        </ul>
                </Card.Body>
                <Card.Footer style={{borderTop:'1px solid #ddd'}} content={<Button style={{margin:'10px 0'}} className="btn" type="primary">primary 按钮</Button>} />
            </Card>

        </div>

        )
    }
}
