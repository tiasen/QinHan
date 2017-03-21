import IScroll from '../lib/iscroll-lite'
const data = ['柴','米','油','盐','柴','米','油','盐','米','油','盐','柴','米','油','盐'];
export default class Page3 extends React.Component {
    constructor(prop) {
        super(prop);

    }
    componentDidMount() {
        var myScroll;
        myScroll = new IScroll('#scrollTest');

    }
    render() {
        return (
            <div
                id="scrollTest"
                style={{
                width: '100%',
                height: '100%'
            }}>
                <ul>
                    {data.map((item,i) => <li key={i} className="kindlist-item">{item}</li>)}
                </ul>
            </div>
        )
    }
}