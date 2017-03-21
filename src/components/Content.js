import {Router,Route,hashHistory} from 'react-router';
import Home from './Home';
import Menu from './Menu';
import Page3 from './Page3';
import Page4 from './Page4';
export default class Content extends React.Component{
    handleContent(){
        var index = this.props.tabsIndex;
        if(index === 0 ){
            return <Home />
        }else if(index === 1){
            return <Menu />
        }else if(index ===2){
            return <Page3 />
        }
    }
    render(){
        return (
            <div tabsIndex = {this.props.tabsIndex} id="t-container">                
                <div style={{width:'100%',height:'100%',overflow:'hidden'}}>{this.handleContent()}</div>
            </div>
        )
    }
}