import { Popup, List, Button, Icon ,Stepper} from 'antd-mobile';
import Pinker from './Pinker'
import Step from './stepper';
import Checkbox from './checkbox';
// fix touch to scroll background page on iOS
// https://github.com/ant-design/ant-design-mobile/issues/307
// https://github.com/ant-design/ant-design-mobile/issues/163
const data = [{label:'西安西安西安西安西安西安西安',value:'029'},{label:'咸阳',value:'0912'}]
const isIPhone = new RegExp('\\biPhone\\b|\\biPod\\b', 'i').test(window.navigator.userAgent);
let maskProps;
if (isIPhone) {
    // Note: the popup content will not scroll.
    maskProps = {
        onTouchStart: e => e.preventDefault(),
    };
}
console.log(isIPhone)
export default class Test extends React.Component {
    state = {
        sel: '',
        val: 3
    };
    onClick = () => {
        Popup.show(<div>
            <List renderHeader={() => (
        <div style={{ position: 'relative' }}>
          委托买入
          <span
            style={{
              position: 'absolute', right: 3, top: -5,
            }}
            onClick={() => this.onClose('cancel')}
          >
            <Icon type="cross" />
          </span>
        </div>)}
                  className="popup-list"
            >

                <Pinker data={data} />

                <Pinker data={data} />
                <Checkbox />
                <Step text="数量" onChooseNmber={(num) => this.onChangeNumber(num)} />


            </List>
            <ul style={{ padding: '0.18rem 0.3rem', listStyle: 'none' }}>
                <li>投资说明投资说明...</li>
                <li style={{ marginTop: '0.18rem' }}>
                    <Button type="primary" onClick={() => this.onClose('cancel')}>买入</Button>
                </li>
            </ul>
        </div>, { animationType: 'slide-up', maskProps, maskClosable: false });
    };
    onChangeNumber = (val) => {
        // console.log(val);
        this.setState({ val });
        console.log(this.state.val)
    }
    onClose = (sel) => {
        console.log(sel)
        this.setState({ sel });
        Popup.hide();
    };
    render() {
        return (<div style={{ padding: '0.15rem' }}>
            <Button onClick={this.onClick}>显示</Button>
        </div>);
    }
}