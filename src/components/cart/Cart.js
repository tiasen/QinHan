import MoneyInfo from './MoneyInfo';
import SelectedList from './SelectedList'
export default class Cart extends React.Component{
    render(){
        return (
            <div style={{position:'relative',height:'100%',paddingTop:'10px',boxSizing:'border-box'}}>
                <MoneyInfo />
                <SelectedList />
            </div>
        )
    }
}