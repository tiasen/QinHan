/**
 * Created by 365969 on 2017/4/6.
 */
import {Menu,Icon} from 'antd';
import {bowserHistory} from 'react-router';
const {SubMenu} = Menu;
export default class SlideNav extends React.Component{
    handleRouter(item){
        const {history}  = this.props;
        history.push(`/backstage/${item.key}`)
    }
    render(){

        return (
            <Menu  theme="dark"
                   mode="horizontal"
                   style={{ lineHeight: '64px',fontSize:16 }}
                   onClick={(item) => this.handleRouter(item)}
                   defaultSelectedKeys={['home']}>
                <Menu.Item key="home">
                    <Icon type="home" />
                    <span className="nav-text">home</span>
                </Menu.Item>
                <SubMenu title={<span><Icon type="coffee" /><span>menu</span></span>}>
                    <Menu.Item key="menu/basic">
                        <span className="nav-text">basic</span>
                    </Menu.Item>
                    <Menu.Item key="menu/list">
                        <span className="nav-text">list</span>
                    </Menu.Item>
                </SubMenu>
                <Menu.Item key="cart">
                    <Icon type="shopping-cart" />
                    <span className="nav-text">cart</span>
                </Menu.Item>
            </Menu>
        )
    }
}
