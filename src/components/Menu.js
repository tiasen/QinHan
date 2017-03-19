import List from './List';
import KindList from './KindList'
export default class Menu extends React.Component {
    render() {
        return (
            <div>
                <div style={{width:'20%',float:'left'}}>
                    <List />
                </div>
                <div style={{width:'80%',float:'left'}}>
                    <KindList />
                </div>
            </div>
        )
    }
}