/**
 * Created by 365969 on 2017/3/27.
 */
import { Picker, List, WhiteSpace } from 'antd-mobile';

import { district, provinceLite as province } from 'antd-mobile-demo-data';
//const data = ['123','4365','666','999'];

class Test extends React.Component {
    state = {
        val:['029']
    };

    render() {
        const {data} = this.props;
        return (<div>
            <Picker data={data} value={this.state.val} onChange={(e) => this.onChange(e)} cols={1}  className="forss">
                <List.Item arrow="horizontal">选择地区（单列）</List.Item>
            </Picker>
        </div>);
    }
    onChange(val){
        console.log(val)
    }
}

export default Test

