import { TabBar, Icon } from 'antd-mobile';

export default class Tabs extends React.Component {

    constructor(props) {
        super(props);
        const {selectedTab} = this.props;
        this.state = {
            selectedTab: selectedTab,
            hidden: false,
            dot:true
        };
    }
    componentDidMount(){
        const {selectedTab} = this.props;
        // browserHistory.push(selectedTab)
    }
    handleClick(tab){
        this.props.onSelecteTab(tab);
        this.setState({
            selectedTab:tab
        })
    }

    render() {
        const {history} = this.props;
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
                    selected={this.state.selectedTab === 'home'}
                    onPress={() => {
                        history.push('home');
                        this.handleClick('home');

                    }}
                >
                </TabBar.Item>
                <TabBar.Item
                    icon={<Icon type={require('.././svg/food.svg')} size="md" />}
                    selectedIcon={<Icon type={require('.././svg/food1.svg')} size="md" />}
                    title="菜单"
                    key="菜单"
                    dot={this.state.dot}
                    selected={this.state.selectedTab === 'menu'}
                    onPress={() => {

                        history.push('menu');
                        this.handleClick('menu');

                    }}
                >
               </TabBar.Item>
                <TabBar.Item
                    icon={<Icon type={require('.././svg/cart.svg')} size="md" />}
                    selectedIcon={<Icon type={require('.././svg/cart1.svg')} size="md" />}
                    title="购物车"
                    key="购物车"
                    selected={this.state.selectedTab === 'cart'}
                    onPress={() => {
                        history.push('cart');
                        this.handleClick('cart');
                    }}
                >
                </TabBar.Item>
                <TabBar.Item
                    icon={<Icon type={require('.././svg/person.svg')} size="md" />}
                    selectedIcon={<Icon type={require('.././svg/person1.svg')} size="md" />}
                    title="个人中心"
                    key="个人中心"
                    selected={this.state.selectedTab === 'personal'}
                    onPress={() => {
                        history.push('personal');
                        this.handleClick('personal');
                    }}

                >
                </TabBar.Item>
            </TabBar>
        );
    }
}






