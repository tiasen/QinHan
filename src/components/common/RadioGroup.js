/**
 * Created by 365969 on 2017/3/28.
 */
require('../../lib/icheck/blue.css');
require('../../lib/icheck/icheck.js');

export default class RadioGroup extends React.Component {
    static propTypes = {
        data:React.PropTypes.array.isRequired,
        onSelected:React.PropTypes.func.isRequired
    };
    constructor(prop){
        super(prop);

    }
    componentDidMount() {
        //const {data,onSelected} = this.props;
        //onSelected(data[0]);
        let node = this.refs.sizeForm;
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
        const {data,onSelected} = this.props;
        for(let j = 0; j <data.length; j++ ){
            if(id === data[j].id){
                tasteMonty = data[j].addM;
                //console.log(data[j])
                onSelected(data[j]);
                break;
            }
        }

    }
    render() {
        const {data} = this.props;
        return (
            <div >
                <div ref="sizeForm">
                    <form>
                        {
                            data.map((item, i)=> {
                                return (
                                    <label key={i} className="tasteCheck" onClick={() => console.log('12332')}>
                                        <input type="radio" value={item.id} className="testinput" name="iCheck"/>
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