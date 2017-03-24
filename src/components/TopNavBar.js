// import {NavBar, Icon} from 'antd-mobile';
import {tabsChanged} from '../reducers/reducers';

export default class TopNavBar extends React.Component {
    render() {
        console.log(this.props)
        return (
            <div id="topNavBar">
                {this.props.pageText}
            </div>
        )
    }
}

