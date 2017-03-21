import IScroll from '../../lib/iscroll-lite'
const data = ['柴','米','油','盐','柴','米','油','盐','米','油','盐','柴','米','油','盐'];
export default class ClassList extends React.Component {
    constructor(prop) {
        super(prop);

    }
    componentDidMount() {
        var myScroll;
        var node = this.refs.scrollTest;
        myScroll = new IScroll(node);

    }
    render() {
        return (
            <div                
                ref="scrollTest"
                style={{
                width: '100%',
                height: '100%'
            }}>
                <ul className='kindlist'>
                    {data.map((item,i) => <li key={i} className="kindlist-item">{item}</li>)}
                </ul>
            </div>
        )
    }
}