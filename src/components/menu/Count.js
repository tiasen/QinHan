/**
 * Created by 365969 on 2017/3/28.
 */
import { List, Stepper } from 'antd-mobile';

export default class Demo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 1
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
                    showNumber  min={1} value={this.state.count} onChange={this.onChange}
                  />}
                           wrap
                >
                    {this.props.text}
                </List.Item>
            </List>
        );
    }
}