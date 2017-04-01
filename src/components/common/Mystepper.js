/**
 * Created by 365969 on 2017/3/29.
 */
import { Toast} from 'antd-mobile';

    /**
     * 说明：
     * **/
class Mystepper extends React.Component{
    static propTypes = {
        min:React.PropTypes.number,
        defaultValue:React.PropTypes.number,
        max:React.PropTypes.number,
        onChangeValue:React.PropTypes.func.isRequired
    };
    constructor(prop){
        super(prop);
        let value =  this.props.defaultValue || this.props.defaultValue === 0 ? this.props.defaultValue : 1

        this.state = {
            value
        }
    }
    componentDidMount(){
        let val = this.refs.input.value;
        const min =  this.props.min || this.props.min === 0 ? this.props.min : 1;
        const max =  this.props.max ;
        const minus = this.refs.minusBtn;
        const add = this.refs.addBtn;
        if(val == min){
            $(minus).addClass('disabled')
        }
        if(val == max){
            $(add).addClass('disabled')
        }
    }
    onMinus = () => {
        let val = this.refs.input.value;
        const min =  this.props.min || this.props.min === 0 ? this.props.min : 1;
        const minus = this.refs.minusBtn;
        const add = this.refs.addBtn;

        if(val <= min + 1){
            $(minus).addClass('disabled')
        }
        if(val <= min){
            this.refs.input.value = min;

        }else{
            this.refs.input.value--;
            $(add).removeClass('disabled')
        }
        if(val <= min) return ;
        this.props.onChangeValue(this.refs.input.value);
    }
    onAdd = () =>{
        let val = this.refs.input.value;
        const minus = this.refs.minusBtn;
        const add = this.refs.addBtn;
        const {max,onChangeValue} = this.props;
        if(max){
            if(val >= max - 1){
                $(add).addClass('disabled')
            }
            if(val >= max){
                this.refs.input.value = max;
            }else{
                this.refs.input.value++;
                $(minus).removeClass('disabled')
            }
        }else{
            this.refs.input.value++;
            $(minus).removeClass('disabled')
        }
        if(val >= max) return ;
        onChangeValue(this.refs.input.value);
    }
    onChangeVal = (e) => {
        const min =  this.props.min || this.props.min === 0 ? this.props.min : 1;
        const {max} = this.props;
        const minus = this.refs.minusBtn;
        const add = this.refs.addBtn;
        $(this.refs.input).change((e)=>{
            let val = e.target.value;
            //console.log($(minus).children('button'))
            if(!isNaN(val)){
                if(val <= min + 1){
                    $(minus).addClass('disabled')
                    $(minus).children('button').disabled = true;
                }else{
                    $(minus).removeClass('disabled')
                }
                if(val <= min){
                    this.refs.input.value = min;
                }
                if(val >= max - 1){
                    $(add).addClass('disabled')
                }else{
                    $(add).removeClass('disabled')
                }
                if(val >= max){
                    this.refs.input.value = max;
                }
            }else{
                this.refs.input.value = min;
            }

        });
        this.setState({
            value:e.target.value
        });
        this.props.onChangeValue(this.refs.input.value);
    }
    render(){
        return (
            <div className="myStepper">
                <div ref="minusBtn" className="myStepperBtn" onClick={this.onMinus}></div>
                <div className="count"><input type="number" ref="input"  value={this.state.value} onChange={this.onChangeVal} /></div>
                <div ref="addBtn" className="myStepperBtn" onClick={this.onAdd}></div>
            </div>
        )
    }
}

export default Mystepper;