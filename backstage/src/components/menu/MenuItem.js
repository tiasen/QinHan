/**
 * Created by 365969 on 2017/4/6.
 */
import {Icon,Modal} from 'antd'
export default class MenuItem extends React.Component{
    state = {
        visible:false
    }
    showModal = ()　=> {
        this.setState({
            visible:true
        })
    }
    handleCancel = (e) => {
        console.log(e);
        this.setState({
            visible: false,
        });
    }
    render(){
        const {data} = this.props;
        console.log(data)
        return (
            <div className="menuitem">
                <div className="bj">
                    <div onClick={this.showModal}>
                        <Icon type="eye-o" />
                    </div>
                    <div onClick={() => console.log('edit')}>
                        <Icon type="edit" />
                    </div>
                    <div onClick={() => console.log('delete')}>
                        <Icon type="delete" />
                    </div>
                </div>
                <Modal title="Basic Modal" visible={this.state.visible}
                       onCancel={this.handleCancel} footer={null}
                >
                    <p>some contents...</p>
                    <p>some contents...</p>
                    <p>some contents...</p>
                </Modal>
                {data.name}
            </div>
        )
    }
}