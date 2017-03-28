import { Toast } from 'antd-mobile';

import EasyScroller from '../.././lib/scroller/EasyScroller';
const data = ['柴','米','油','盐','柴','米','油','盐','米','油','盐','柴','米','油','盐'];
export default class ClassList extends React.Component {
    constructor(prop) {
        super(prop);
        this.state = {
            myScroller:{}
        }
    }
    componentDidMount() {
        const node = this.refs.scroller;
        this.setState({
            myScroller:new EasyScroller(node,{scrollingX:false,scrollingY:true})
        })

        //console.log(this.props)
    }
    render() {
        const {list,onSelectClass} = this.props;
        return (
            <div style={{width: '100%',height: '100%',position:'relative',overflow:'hidden'}}>
                <ul className='kindlist' ref="scroller"  style={{width:'100%',position:'absolute'}}>
                    {list.map((item,i) => <li key={i} onClick={() => onSelectClass(i)} className="kindlist-item">{item}</li>)}
                </ul>
            </div>
        )
    }

}