import MoneyInfo from './../components/cart/MoneyInfo';
import SelectedList from './../components/cart/SelectedList'
export default class Cart extends React.Component{
    componentDidMount(){
        console.log(this.props)
    }
    render(){
        return (
            <div style={{position:'relative',height:'100%',paddingTop:'10px',boxSizing:'border-box'}}>
                <MoneyInfo />
                <SelectedList />
            </div>
        )
    }
}