/**
 * Created by 365969 on 2017/3/28.
 */
require('../../lib/icheck/blue.css');
require('../../lib/icheck/icheck.js');

export default class CheckBox extends React.Component {
    static propTypes = {
        data:React.PropTypes.array.isRequired,
        onSelected:React.PropTypes.func.isRequired
    };

    componentDidMount() {
        const {onSelected} = this.props;
        let node = this.refs.tasteForm;
        const _this = this;
        let $inputList = $(node).find('.testinput');
        $inputList.iCheck({
            checkboxClass: 'icheckbox_flat-blue',
            radioClass: 'iradio_flat-blue',
            increaseArea: '20%' // optional
        });

        $inputList.on('ifChanged', function(event){ //ifCreated 事件应该在插件初始化之前绑定

            let arr = [];
            $inputList.each((i,item) => {
                if(item.checked){
                    arr.push(item.value)
                }
            });
            onSelected(arr);
        });
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
                                            <input type="checkbox" value={item}  className="testinput" name="iCheck"/>
                                            <span>{item}</span>
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