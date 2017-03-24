import List from './List';
import KindList from './KindList'
import ClassList from './ClassList';
import MainList from './MainList';
export default class Menu extends React.Component {
    render() {
        return (
            <div className="menu">
                <div className="menu-left" style={{height:'100%',overflow:'hidden'}}>
                    <ClassList />
                </div>
                <div className="menu-right"  style={{height:'100%',overflow:'hidden'}}>
                    <MainList />
                </div>
            </div>
        )
    }
}