/**
 * Created by 365969 on 2017/4/6.
 */
import {Icon} from 'antd';
import ViewModal from './ViewModal';
export default class MenuItem extends React.Component{
    state = {
        viewVisible:false
    }
    showViewModel = ()　=> {
        this.setState({
            viewVisible:true
        })
    }
    cancelViewModel = (e) => {
        this.setState({
            viewVisible: false,
        });
    }
    render(){
        const {data} = this.props;
        console.log(data)
        return (
            <div className="menuitem">
                <div className="bj">
                    <div onClick={this.showViewModel}>
                        <Icon type="eye-o" />
                    </div>
                    <div onClick={() => console.log('edit')}>
                        <Icon type="edit" />
                    </div>
                    <div onClick={() => console.log('delete')}>
                        <Icon type="delete" />
                    </div>
                </div>
               <ViewModal data={data} viewVisible={this.state.viewVisible} handleCancel={this.cancelViewModel} />
                {data.name}
            </div>
        )
    }
}