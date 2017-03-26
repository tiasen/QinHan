import ClassList from './ClassList';
import MainList from './MainList';
export default class Menu extends React.Component {
    componentDidMount(){
        // debugger;
        console.log(this.props)
    }
    render() {
        return (
            <div className="menu">
                <div className="menu-left" style={{height:'100%'}}>
                    <ClassList />
                </div>
                <div className="menu-right"  style={{height:'100%'}}>
                    <MainList />
                </div>
            </div>
        )
    }
}