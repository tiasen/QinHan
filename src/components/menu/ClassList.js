import { Toast } from 'antd-mobile';
import classNames from 'classnames';
import EasyScroller from '../.././lib/scroller/EasyScroller';
export default class ClassList extends React.Component {
    constructor(prop) {
        super(prop);
        this.state = {
            myScroller:{},
            selectedIdx:0
        }
    }
    componentDidMount() {
        const node = this.refs.scroller;
        this.setState({
            myScroller:new EasyScroller(node)
        })

        //console.log(this.props)
    }
    onSelectClass(i){
        const {onSelectClass} = this.props;
        onSelectClass(i);
        this.setState({
            selectedIdx:i
        })

    }
    render() {
        const {list} = this.props;
        return (
            <div style={{width: '100%',height: '100%',position:'relative',overflow:'hidden'}}>
                <ul className='kindList-box' ref="scroller"  style={{width:'100%',position:'absolute'}}>{/*kindlist selected*/}
                    {list.map((item,i) => <li key={i} onClick={() => this.onSelectClass(i)} className={classNames({kindlist:true,selected:i === this.state.selectedIdx })}><span className="kindlist-item">{item}</span></li>)}
                </ul>
            </div>
        )
    }

}