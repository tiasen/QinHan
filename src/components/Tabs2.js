/**
 * Created by tiasen-ubuntu on 17-3-25.
 */
import { TabBar, Icon } from 'antd-mobile';
/* eslint global-require: 0 */
import Content from './Content';
// import TopNavBar from './TopNavBar';
import {Router,Route,IndexRoute ,browserHistory } from 'react-router';

import Home from './home/Home';
import Menu from './menu/Menu';
import Cart from './cart/Cart';
import Personal from './personal/Personal';

export default  React.createClass({
    getInitialState:function() {
        return {
            selectedTabIndex: 0,
            hidden: false,
            dot: true
        }
    },
    contextTypes: {
        router: React.PropTypes.object
    },
    renderContent:function(){
        console.log(this.props)
        return (
            <div>
                <div className="t-container" style={{ backgroundColor: '#eee', textAlign: 'center' }}>
                    <Router history={browserHistory}>
                        <Route path="/" >
                            <IndexRoute component={Home} />
                            <Route path="/home" component={Home}/>
                            <Route path="/menu" component={Menu}/>
                            <Route path="/cart" component={Cart}/>
                            <Route path="/personal" component={Personal}/>
                        </Route>
                    </Router>
                </div>
            </div>

        );
    },
    handleClick:function(text){
        this.props.onHandleClick(text);
    },
    render:function() {
        return (
            <TabBar
                unselectedTintColor="#949494"
                tintColor="#33A3F4"
                barTintColor="white"
                hidden={this.state.hidden}
            >
                <TabBar.Item
                    title="首页"
                    key="首页"
                    icon={<Icon type={require('.././svg/home.svg')} size="md" />}
                    selectedIcon={<Icon type={require('.././svg/home1.svg')} size="md" />}
                    selected={this.state.selectedTabIndex === 0}
                    onPress={() => {
                        console.log(this);
                        browserHistory.push('/home');
                        this.setState({
                            selectedTabIndex: 0,
                        });
                    }}
                >
                    {this.renderContent(0)}
                </TabBar.Item>
                <TabBar.Item
                    icon={<Icon type={require('.././svg/food.svg')} size="md" />}
                    selectedIcon={<Icon type={require('.././svg/food1.svg')} size="md" />}
                    title="菜单"
                    key="菜单"
                    dot={this.state.dot}
                    selected={this.state.selectedTabIndex === 1}
                    onPress={() => {
                        console.log(this)
                        this.context.router.replace('/menu');
                        this.setState({
                            selectedTabIndex: 1,
                        });
                    }}
                >
                    {this.renderContent(1)}
                </TabBar.Item>
                <TabBar.Item
                    icon={<Icon type={require('.././svg/cart.svg')} size="md" />}
                    selectedIcon={<Icon type={require('.././svg/cart1.svg')} size="md" />}
                    title="购物车"
                    key="购物车"
                    selected={this.state.selectedTabIndex === 2}
                    onPress={() => {
                        browserHistory.push('/cart');
                        this.setState({
                            selectedTabIndex: 2,
                        });
                    }}
                >
                    {this.renderContent(2)}
                </TabBar.Item>
                <TabBar.Item
                    icon={<Icon type={require('.././svg/person.svg')} size="md" />}
                    selectedIcon={<Icon type={require('.././svg/person1.svg')} size="md" />}
                    title="个人中心"
                    key="个人中心"
                    selected={this.context.selectedTabIndex === 3}
                    onPress={() => {
                        browserHistory.push('/personal');
                        this.setState({
                            selectedTabIndex: 3,
                        });
                    }}
                >
                    {this.renderContent(3)}
                </TabBar.Item>
            </TabBar>
        );
    }
})



