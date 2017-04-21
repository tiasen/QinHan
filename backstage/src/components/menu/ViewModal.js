/**
 * Created by 365969 on 2017/4/21.
 */
import {Modal,Tag} from 'antd';

export default class ViewModel extends React.Component{

    handleCancel = () => {
        const {handleCancel} = this.props;
        handleCancel()
    }
    render(){
        const {viewVisible,data} = this.props;
        console.log(data);
        return (
            <Modal title={data.name} visible={viewVisible}
                   onCancel={this.handleCancel} footer={null}
            >
                <div className="viewModal">
                    <div className="top">
                        <div className="avatar">
                            {/*<img src="" />*/}
                        </div>
                        <div className="mainInfo">
                            <div className="inner">
                                <span>Name:</span>
                                <span>{data.name}</span>
                            </div>
                            <div className="inner">
                                <span>Description:</span>
                                <span>{data.description}</span>
                            </div>
                            {
                                data.other && data.other.length > 0 ?
                                    <div className="inner">
                                        <span>Other:</span>
                                        <span className="otherSpan">
                                             {data.other.map((item,i) =>
                                                 <Tag key={i} color="#2db7f5" >{JSON.parse(item).name}</Tag>
                                             )}
                                        </span>
                                    </div> : ''
                            }
                        </div>
                    </div>
                    <div>
                        <h3></h3>
                    </div>
                </div>
            </Modal>
        )
    }
}