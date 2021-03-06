/**
 * Created by 365969 on 2017/3/28.
 */
import { List, Stepper } from 'antd-mobile';
import Mystepper from './Mystepper';
export default class Demo extends React.Component {
    static propTypes = {
        onChooseNmber:React.PropTypes.func.isRequired,
        text:React.PropTypes.string.isRequired
    };
    onChange = (val) => {
        this.props.onChooseNmber(val)
    };
    render() {
        const {text,defaultValue} = this.props;
        return (
            <List>
                <List.Item extra={
                  <Mystepper defaultValue={parseInt(defaultValue)} onChangeValue = {(val) => this.onChange(val)} />
                  }
                           wrap
                >
                    {text}
                </List.Item>
            </List>
        );
    }
}