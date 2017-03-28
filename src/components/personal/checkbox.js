/**
 * Created by 365969 on 2017/3/27.
 */
import { List, Checkbox, Flex,Popup,Button,Icon,WingBlank  } from 'antd-mobile';
const CheckboxItem = Checkbox.CheckboxItem;
require('../../lib/icheck/blue.css');
require('../../lib/icheck/icheck.js');

export default class CheckBox extends React.Component{
    componentDidMount(){
        console.log($().iCheck)
        $('.testinput').iCheck({
            checkboxClass: 'icheckbox_flat-blue',
            radioClass: 'iradio_flat-blue',
            increaseArea: '20%' // optional
        });
    }

    render(){
        const data = [
            { value: 0, label: '博士' },
            { value: 1, label: '本科' },
            { value: 2, label: '高中' },
            { value: 2, label: '高中' }
        ];
        return (
            <div >
                <div>
                    <form>
                        <WingBlank style={{height:'45px',fontSize:'18px',lineHeight:'45px'}}>
                            <Flex>
                                <Flex.Item>
                                    <input type="checkbox" className="testinput"  name="iCheck" />123231123
                                </Flex.Item>
                                <Flex.Item>
                                    <input type="checkbox" className="testinput"  name="iCheck" />123231123
                                </Flex.Item>
                            </Flex>
                        </WingBlank>
                        <WingBlank style={{height:'45px',fontSize:'18px',lineHeight:'45px'}}>
                            <Flex>
                                <Flex.Item>
                                    <input type="checkbox" className="testinput"  name="iCheck" />123231123
                                </Flex.Item>
                                <Flex.Item>
                                </Flex.Item>
                            </Flex>
                        </WingBlank>
                    </form>
                </div>
            </div>
        )
    }
}