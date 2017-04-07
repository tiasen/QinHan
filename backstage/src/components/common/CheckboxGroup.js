/**
 * Created by 365969 on 2017/4/6.
 */
import { Checkbox } from 'antd';
const CheckboxGroup = Checkbox.Group;

const plainOptions = ['Apple', 'Pear', 'Orange','Apple1', 'Pear1', 'Orange1'];
const defaultCheckedList = ['Apple', 'Orange'];

export default class App extends React.Component {
    state = {
        checkedList: defaultCheckedList,
        indeterminate: true,
        checkAll: false,
    };
    render() {
        return (
            <div>
                {/*<div style={{ borderBottom: '1px solid #E9E9E9' }}>
                    <Checkbox
                        indeterminate={this.state.indeterminate}
                        onChange={this.onCheckAllChange}
                        checked={this.state.checkAll}
                    >
                        Check all
                    </Checkbox>
                </div>*/}
                <CheckboxGroup options={plainOptions} value={this.state.checkedList} onChange={this.onChange} />
            </div>
        );
    }
    onChange = (checkedList) => {
        const {onTasteValue} = this.props;
        this.setState({
            checkedList,
            indeterminate: !!checkedList.length && (checkedList.length < plainOptions.length),
            checkAll: checkedList.length === plainOptions.length,
        });
        //onTasteValue(checkedList)
    }
    onCheckAllChange = (e) => {
        this.setState({
            checkedList: e.target.checked ? plainOptions : [],
            indeterminate: false,
            checkAll: e.target.checked,
        });
    }
}

