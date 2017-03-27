/**
 * Created by 365969 on 2017/3/27.
 */
import { List, Checkbox, Flex,Popup,Button,Icon } from 'antd-mobile';

const isIPhone = new RegExp('\\biPhone\\b|\\biPod\\b', 'i').test(window.navigator.userAgent);
let maskProps;
if (isIPhone) {
    // Note: the popup content will not scroll.
    maskProps = {
        onTouchStart: e => e.preventDefault(),
    };
}
const CheckboxItem = Checkbox.CheckboxItem;
const AgreeItem = Checkbox.AgreeItem;
const data = [
    { value: 0, label: '博士' },
    { value: 1, label: '本科' },
    { value: 2, label: '高中' },
];
export default class Test extends React.Component {

    constructor(...props){
        super(...props);
        //const {isShow} = this.props;
        this.state = {
            sel:''
        }
    }
    onClose = (sel) => {
        console.log(sel)
        this.setState({ sel });
        Popup.hide();
    };
    onChange = (val) => {
        console.log(val);
    }
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
                <List renderHeader={() => 'CheckboxItem 演示'}>
                    {data.map(i => (
                        <CheckboxItem key={i.value} onChange={() => this.onChange(i.value)}>
                            {i.label}
                        </CheckboxItem>
                    ))}
                    <CheckboxItem key="disabled" data-seed="logId" disabled defaultChecked multipleLine>
                        初中<List.Item.Brief>辅助文字内容</List.Item.Brief>
                    </CheckboxItem>
                </List>
            </List>
        </div>, { animationType: 'slide-up', maskProps, maskClosable: false });
    };
    render() {

        return (<div style={{ padding: '0.15rem' }}>
            <Button onClick={this.onClick}>显示</Button>
            <List renderHeader={() => 'CheckboxItem 演示'}>
                {data.map(i => (
                    <CheckboxItem key={i.value} onChange={() => this.onChange(i.value)}>
                        {i.label}
                    </CheckboxItem>
                ))}
                <CheckboxItem key="disabled" data-seed="logId" disabled defaultChecked multipleLine>
                    初中<List.Item.Brief>辅助文字内容</List.Item.Brief>
                </CheckboxItem>
            </List>
        </div>);
    }
}