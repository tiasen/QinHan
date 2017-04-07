/**
 * Created by 365969 on 2017/4/6.
 */
import { Select } from 'antd';
const Option = Select.Option;

export default class BasicSelect extends React.Component{
    handleChange = (value) => {
        const {handleSelected} = this.props;
        handleSelected(value);
    }
    render(){
        const {selectValue,list} = this.props;
        return (
            <div>
                <Select defaultValue={selectValue} style={{ width: "100%" }} onChange={this.handleChange}>
                    {list.map((item,i) => {
                        return (
                            <Option value={item} key={i}>{item}</Option>
                        )
                    })}
                </Select>
            </div>
        )
    }
}