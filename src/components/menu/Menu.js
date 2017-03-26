import ClassList from './ClassList';
import MainList from './MainList';
import {selectTab,fetchGetsIfNeed} from '../../actions/actions';

export default class Menu extends React.Component {
    componentDidMount(){
        // console.log(this);
        const {dispatch,data} = this.props;
        dispatch(fetchGetsIfNeed('menu'));
        // console.log(data)
    }
    componentWillReceiveProps(nextProps){
        // console.log(nextProps.data == this.props.data);
    }
    render() {
        console.log(this.props.data);
        const {data} = this.props.data;
        if(data && data.length > 0){
            alert('have')
        }
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