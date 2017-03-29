/**
 * Created by 365969 on 2017/3/28.
 */
require('../../lib/icheck/blue.css');
require('../../lib/icheck/icheck.js');

export default class CheckBox extends React.Component {
    static propTypes = {
        data:React.PropTypes.array.isRequired,
        onTasteSelected:React.PropTypes.func.isRequired
    };
    constructor(prop){
        super(prop);
        const {data,onTasteSelected} = this.props;
        onTasteSelected(data[0]);
    }
    componentDidMount() {
        let node = this.refs.tasteForm;
        const _this = this;
        let $inputList = $(node).find('.testinput');
        $inputList.iCheck({
            checkboxClass: 'icheckbox_flat-blue',
            radioClass: 'iradio_flat-blue',
            increaseArea: '20%' // optional
        });
        $inputList.eq(0).iCheck('check');

        $inputList.on('ifChecked', function(event){ //ifCreated 事件应该在插件初始化之前绑定
            _this.onChange(event.target.value);
        });
    }
    onChange(id){
        let tasteMonty = 0;
        const {data,onTasteSelected} = this.props;
        for(let j = 0; j <data.length; j++ ){
            if(id === data[j].id){
                tasteMonty = data[j].addM;
                //console.log(data[j])
                onTasteSelected(data[j]);
                break;
            }
        }

    }
    render() {
        const {data} = this.props;
        return (
            <div >
                <div ref="tasteForm">
                    <form>
                        {
                            data.map((item, i)=> {
                                return (
                                    <label key={i} className="tasteCheck" >
                                            <input type="radio" value={item.id}  className="testinput" name="iCheck"/>
                                            <span>{item.name}</span>
                                    </label>
                                )
                            })
                        }

                    </form>
                </div>
            </div>
        )
    }
}