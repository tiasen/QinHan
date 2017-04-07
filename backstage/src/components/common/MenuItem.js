/**
 * Created by 365969 on 2017/4/6.
 */
import {Icon} from 'antd'
export default class MenuItem extends React.Component{
    confirm(){
        console.log('confirm')
    }
    cancel(){
        console.log('cancel')
    }
    render(){
        return (
            <div className="menuitem">
                <div className="bj">
                    <div onClick={()=> console.log('eye')}>
                        <Icon type="eye-o" />
                    </div>
                    <div onClick={() => console.log('edit')}>
                        <Icon type="edit" />
                    </div>
                    <div onClick={() => console.log('delete')}>
                        <Icon type="delete" />
                    </div>
                </div>
                哈哈哈哈哈哈
            </div>

        )
    }
}