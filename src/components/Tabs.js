import { TabBar, Icon } from 'antd-mobile';
/* eslint global-require: 0 */
import Content from './Content';
export default class Tabs extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedTabIndex: 0,
      hidden: false,
      dot:true
    };
  }

  renderContent(pageText) {
    return (
      <div  className="t-container" style={{ backgroundColor: '#eee', textAlign: 'center' }}>
        <Content tabsIndex = {pageText} />
      </div>
    );
  }

  render() {
    return (
      <TabBar
        unselectedTintColor="#949494"
        tintColor="#33A3F4"
        barTintColor="white"
        hidden={this.state.hidden}
      >
        <TabBar.Item
          title="生活"
          key="生活"
          icon={<div style={{
            width: '0.44rem',
            height: '0.44rem',
            background: 'url(https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg) center center /  0.42rem 0.42rem no-repeat' }}
          />
          }
          selectedIcon={<div style={{
            width: '0.44rem',
            height: '0.44rem',
            background: 'url(https://zos.alipayobjects.com/rmsportal/iSrlOTqrKddqbOmlvUfq.svg) center center /  0.42rem 0.42rem no-repeat' }}
          />
          }
          selected={this.state.selectedTabIndex === 0}
          onPress={() => {
            this.setState({
              selectedTabIndex: 0,
            });            
          }}          
        >
          {this.renderContent(0)}
        </TabBar.Item>
        <TabBar.Item
          icon={<Icon type="koubei-o" size="md" />}
          selectedIcon={<Icon type="koubei" size="md" />}
          title="口碑"
          key="口碑"
          dot={this.state.dot}
          selected={this.state.selectedTabIndex === 1}
          onPress={() => {
            this.setState({
              selectedTabIndex: 1,
            });
          }}          
        >          
          {this.renderContent(1)}
        </TabBar.Item>
        <TabBar.Item
          icon={
            <div style={{
              width: '0.44rem',
              height: '0.44rem',
              background: 'url(https://zos.alipayobjects.com/rmsportal/psUFoAMjkCcjqtUCNPxB.svg) center center /  0.42rem 0.42rem no-repeat' }}
            />
          }
          selectedIcon={
            <div style={{
              width: '0.44rem',
              height: '0.44rem',
              background: 'url(https://zos.alipayobjects.com/rmsportal/IIRLrXXrFAhXVdhMWgUI.svg) center center /  0.42rem 0.42rem no-repeat' }}
            />
          }
          title="朋友"
          key="朋友"
          selected={this.state.selectedTabIndex === 2}
          onPress={() => {
            this.setState({
              selectedTabIndex: 2,
            });
          }}
        >          
          {this.renderContent(2)}
        </TabBar.Item>
        <TabBar.Item
          icon={{ uri: 'https://zos.alipayobjects.com/rmsportal/asJMfBrNqpMMlVpeInPQ.svg' }}
          selectedIcon={{ uri: 'https://zos.alipayobjects.com/rmsportal/gjpzzcrPMkhfEqgbYvmN.svg' }}
          title="我的"
          key="我的"
          selected={this.state.selectedTabIndex === 3}
          onPress={() => {
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
}

