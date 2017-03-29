/**
 * Created by 365969 on 2017/3/27.
 */
import { List, Stepper, } from 'antd-mobile';

export default class Demo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            val: 1
        };
    }
    onChange = (val) => {
        this.setState({ val });
        this.props.onChooseNmber(val)
    }

    render() {
        return (
            <List>
                <List.Item extra={
                  <Stepper
                    style={{ width: '100%', minWidth: '2rem' }}
                    showNumber   max={10} min={1} value={this.state.val} onChange={this.onChange}
                  />}
                           wrap
                >
                    {this.props.text}
                </List.Item>
            </List>
        );
    }
}