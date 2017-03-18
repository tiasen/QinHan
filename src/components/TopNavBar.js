import {NavBar, Icon} from 'antd-mobile';

export default class TopNavBar extends React.Component {
    render() {
        return (
            <div id="topNavBar">
                <NavBar                    
                    leftContent="返回"
                    mode="light"
                    onLeftClick={() => console.log('onLeftClick')}
                    rightContent={[< Icon key = "0" type = "search" style = {{ marginRight: '0.32rem' }}/>, <Icon key="1" type="ellipsis" / >]}>NavBar</NavBar>
            </div>
        )
    }
}

