import {Router,Route,hashHistory} from 'react-router';
import Home from './Home';
import Page2 from './Page2';
import Page3 from './Page3';
import Page4 from './Page4';
export default class Content extends React.Component{
    handleContent(){
        var index = this.props.tabsIndex;
        if(index === 0 ){
            return <Home />
        }
    }
    render(){
        return (
            <div tabsIndex = {this.props.tabsIndex} id="container">                
                <div>{this.handleContent()}</div>
                <h1>{this.props.tabsIndex}</h1>
            </div>
        )
    }
}