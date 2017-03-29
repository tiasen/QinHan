/**
 * Created by 365969 on 2017/3/28.
 */
import { List, Stepper } from 'antd-mobile';
import Mystepper from '../common/Mystepper';
export default class Demo extends React.Component {
    static propTypes = {
        onChooseNmber:React.PropTypes.func.isRequired,
        text:React.PropTypes.string.isRequired
    };
    onChange = (val) => {
        this.props.onChooseNmber(val)
    };
    render() {
        const {text} = this.props;
        return (
            <List>
                <List.Item extra={
                  <Mystepper onChangeValue = {(val) => this.onChange(val)} />
                  }
                           wrap
                >
                    {text}
                </List.Item>
            </List>
        );
    }
}