import { TabBar, Icon } from 'antd-mobile';
import {Router,Route,IndexRoute ,browserHistory } from 'react-router';
import Content from './Content';

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
      browserHistory.push(selectedTab)
  }
  renderContent() {
    return (
      <div>        
        <div className="t-container" style={{ backgroundColor: '#eee', textAlign: 'center' }}>
            <Content />
        </div>
      </div>

    );
  }
  handleClick(tab){
      this.props.onSelectTab(tab);
      this.setState({
          selectedTab:tab
      })
  }

  render() {
      console.log(this.props);
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
            browserHistory.push('home');
            this.handleClick('home');

          }}          
        >
          {this.renderContent()}
        </TabBar.Item>
        <TabBar.Item
          icon={<Icon type={require('.././svg/food.svg')} size="md" />}
          selectedIcon={<Icon type={require('.././svg/food1.svg')} size="md" />}
          title="菜单"
          key="菜单"
          dot={this.state.dot}
          selected={this.state.selectedTab === 'menu'}
          onPress={() => {

            browserHistory.push('menu');
            this.handleClick('menu');

          }}          
        >          
          {this.renderContent()}
        </TabBar.Item>
        <TabBar.Item
          icon={<Icon type={require('.././svg/cart.svg')} size="md" />}
          selectedIcon={<Icon type={require('.././svg/cart1.svg')} size="md" />}
          title="购物车"
          key="购物车"
          selected={this.state.selectedTab === 'cart'}
          onPress={() => {
            browserHistory.push('cart');
            this.handleClick('cart');
          }}
        >          
          {this.renderContent()}
        </TabBar.Item>
        <TabBar.Item
          icon={<Icon type={require('.././svg/person.svg')} size="md" />}
          selectedIcon={<Icon type={require('.././svg/person1.svg')} size="md" />}
          title="个人中心"
          key="个人中心"
          selected={this.context.selectedTab === 'personal'}
          onPress={() => {
            browserHistory.push('personal');
            this.handleClick('personal');
          }}
        >
          {this.renderContent()}
        </TabBar.Item>
      </TabBar>
    );
  }
}






