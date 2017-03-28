/**
 * Created by 365969 on 2017/3/28.
 */
import { List, Checkbox, Flex,Popup,Button,Icon,WingBlank  } from 'antd-mobile';
const CheckboxItem = Checkbox.CheckboxItem;
require('../../lib/icheck/blue.css');
require('../../lib/icheck/icheck.js');

export default class CheckBox extends React.Component {
    componentDidMount() {
        $('.testinput').iCheck({
            checkboxClass: 'icheckbox_flat-blue',
            radioClass: 'iradio_flat-blue',
            increaseArea: '20%' // optional
        });
        $('#tasteForm').find('input').blur()
    }

    _renderTaste() {

    }

    render() {
        const {data} = this.props;
        return (
            <div >
                <div ref="tasteForm">
                    <form id="tasteForm">
                        {
                            data.map((item, i)=> {
                                return (
                                    <div key={i} className="tasteCheck">
                                        <label>
                                            <input type="checkbox" className="testinput" name="iCheck"/>
                                            <span>123456</span>
                                        </label>
                                    </div>
                                )
                            })
                        }

                    </form>
                </div>
            </div>
        )
    }
}