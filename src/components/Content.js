import {Router,Route,hashHistory} from 'react-router';
import Home from './home/Home';
import Menu from './menu/Menu';
import Cart from './cart/Cart';
import Personal from './personal/Personal';
export default class Content extends React.Component{
    handleContent(){
        var index = this.props.tabsIndex;
        if(index === 0 ){
            return <Home />
        }else if(index === 1){
            return <Menu />
        }else if(index ===2){
            return <Cart />
        }else {
            return <Personal />
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