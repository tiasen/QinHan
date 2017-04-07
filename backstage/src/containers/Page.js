/**
 * Created by 365969 on 2017/4/5.
 */
import { Layout, Menu, Breadcrumb } from 'antd';
const { Header, Content, Footer } = Layout;;
import Nav from './../components/Nav';
import Router from '../router';
import SlideNav from '../components/Nav';
import BreadcrumbNav from '../components/BreadcrumbNav';

export default class Page extends React.Component {
    state = {
        collapsed: false,
    };
    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    }
    render() {
        console.log(this.props)
        return (
            <Layout className="layout" id="components-layout">
                <Header>
                    <div className="logo" />
                    <Nav history={this.props.history} />
                </Header>
                <Content style={{ padding: '0 50px' }}>
                    <Breadcrumb style={{ margin: '12px 0' }}>
                        <Breadcrumb.Item>Home</Breadcrumb.Item>
                        <Breadcrumb.Item>List</Breadcrumb.Item>
                        <Breadcrumb.Item>App</Breadcrumb.Item>
                    </Breadcrumb>

                    <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
                        <Router history={this.props.history} />
                    </div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>
                    Ant Design ©2016 Created by Ant UED
                </Footer>
            </Layout>
        );
    }
}