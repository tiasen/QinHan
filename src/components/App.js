
import Tabs from './Tabs';
import TopNavBar from './TopNavBar';
import Content from './Content'
export default class App extends React.Component{
    render(){
        return (
            <div>
                <TopNavBar />
                <Tabs  />
            </div>
            
        )
    }
}
