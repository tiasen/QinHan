import IScroll from '../lib/iscroll-lite'
const data = [
  {
    img: 'https://zos.alipayobjects.com/rmsportal/dKbkpPXKfvZzWCM.png',
    title: '相约酒店',
    des: '不是所有的兼职汪都需要风吹日晒不是所有的兼职汪都需要风吹日晒',
    price: '14.00'
  }, {
    img: 'https://zos.alipayobjects.com/rmsportal/XmwCzSeJiqpkuMB.png',
    title: '麦当劳邀您过周末',
    des: '不是所有的兼职汪都需要风吹日晒',
    price: '14.00'
  }, {
    img: 'https://zos.alipayobjects.com/rmsportal/hfVtzEhPzTUewPm.png',
    title: '食惠周',
    des: '不是所有的兼职汪都需要风吹日晒',
    price: '14.00'
  },
  {
    img: 'https://zos.alipayobjects.com/rmsportal/dKbkpPXKfvZzWCM.png',
    title: '相约酒店',
    des: '不是所有的兼职汪都需要风吹日晒不是所有的兼职汪都需要风吹日晒',
    price: '14.00'
  }, {
    img: 'https://zos.alipayobjects.com/rmsportal/XmwCzSeJiqpkuMB.png',
    title: '麦当劳邀您过周末',
    des: '不是所有的兼职汪都需要风吹日晒',
    price: '14.00'
  }, {
    img: 'https://zos.alipayobjects.com/rmsportal/hfVtzEhPzTUewPm.png',
    title: '食惠周',
    des: '不是所有的兼职汪都需要风吹日晒',
    price: '14.00'
  },
  {
    img: 'https://zos.alipayobjects.com/rmsportal/dKbkpPXKfvZzWCM.png',
    title: '相约酒店',
    des: '不是所有的兼职汪都需要风吹日晒不是所有的兼职汪都需要风吹日晒',
    price: '14.00'
  }, {
    img: 'https://zos.alipayobjects.com/rmsportal/XmwCzSeJiqpkuMB.png',
    title: '麦当劳邀您过周末',
    des: '不是所有的兼职汪都需要风吹日晒',
    price: '14.00'
  }, {
    img: 'https://zos.alipayobjects.com/rmsportal/hfVtzEhPzTUewPm.png',
    title: '食惠周',
    des: '不是所有的兼职汪都需要风吹日晒',
    price: '14.00'
  }
];
export default class Page3 extends React.Component {
    constructor(prop) {
        super(prop);
        // this.myScroll;

    }
    componentDidMount() {
        console.log(this.refs.menuMainList);      
        this.myScroll = new IScroll('#menuMainList');

    }
    _renderRow(item,i) {
        return (
        <li key={i} className="ListViewItem">
            <div className="ListViewItem-left">
                <img src={item.img}/>
            </div>
            <div className="ListViewItem-right">
                <h5 className="title">{item.title}</h5>
                <p className="des">{item.des}</p>
                <p className="price">￥:{item.price}</p>
            </div>

        </li>
        )
    }
    render() {
        // console.log(this);
        
        return (
            <div
                id='menuMainList'
                ref="menuMainList"
                style={{
                width: '100%',
                height: '100%'
            }}>
                <ul>
                    {data.map((item,i) => {this._renderRow(item,i);})}
                </ul>
            </div>
        )
    }
}