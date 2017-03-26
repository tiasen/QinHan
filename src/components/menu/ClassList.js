
import scroller from '../.././lib/scroller/EasyScroller';
const data = ['柴','米','油','盐','柴','米','油','盐','米','油','盐','柴','米','油','盐'];
export default class ClassList extends React.Component {
    constructor(prop) {
        super(prop);

    }
    componentDidMount() {
        scroller();

    }
    render() {
        return (
            <div style={{width: '100%',height: '100%',position:'relative',overflow:'hidden'}}>
                <ul className='kindlist' data-scrollable="y"  style={{width:'100%',position:'absolute'}}>
                    {data.map((item,i) => <li key={i} className="kindlist-item">{item}</li>)}
                </ul>
            </div>
        )
    }
}