/**
 * Created by 365969 on 2017/3/29.
 */
export default class ErrorPage extends React.Component{
    reloadData = () => {
        this.props.onReloadData();
    }
    render(){
        return (
            <div className="errorPage" onClick={this.reloadData}></div>
        )
    }
}