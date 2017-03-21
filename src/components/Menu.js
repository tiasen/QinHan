import List from './List';
import KindList from './KindList'
import Page3 from './Page3';
import Page4 from './Page4';
export default class Menu extends React.Component {
    render() {
        return (
            <div className="menu">
                <div className="menu-left" style={{height:'100%',overflow:'hidden'}}>
                    <Page3 />
                </div>
                <div className="menu-right"  style={{height:'100%',overflow:'hidden'}}>
                    <Page4 />
                </div>
            </div>
        )
    }
}