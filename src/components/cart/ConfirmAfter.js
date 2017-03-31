
/**
 * Created by 365969 on 2017/3/30.
 */
import MoneyInfo from './MoneyInfo';
import SelectedList from './SelectedList'
export default class ConfirmAfter extends React.Component{
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