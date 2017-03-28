import EasyScroller from '../../lib/scroller/EasyScroller';
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
export default class MainList extends React.Component {
    constructor(prop) {
        super(prop);
        // this.myScroll;
        this.state = {
            myScroller:{}
        }
    }
    componentWillMount(){
        //console.log(this.props)
    }
    componentDidMount() {
        //scroller();
        //console.log(this.props)
        const node = this.refs.scroller;
        this.setState({
            myScroller:new EasyScroller(node,{scrollingX:false,scrollingY:true})
        })

    }
    componentWillReceiveProps(nextProps){
        if(this.props.selectedClass != nextProps.selectedClass){
            this.state.myScroller.scroller.scrollTo(0,0,false);
        }
    }
    _renderRow(item,i) {
        const {onShowPopup} = this.props;
        return (
        <li key={i} className="ListViewItem" onClick={() => onShowPopup(item)}>
            <div className="ListViewItem-left">
                <img src={item.img}/>
            </div>
            <div className="ListViewItem-right">
                <h5 className="title">{item.name}</h5>
                <p className="des">{item.des}</p>
                <p className="price">￥:{item.price}</p>
            </div>

        </li>
        )
    }
    render() {
        // console.log(this);
        const {data,selectedClass} = this.props;
        return (
            <div style={{width: '100%',height: '100%',position:'relative',overflow:'hidden'}}>
                <ul ref="scroller" style={{ background:'#fff',width:'100%',position:'absolute'}}>
                    {data[selectedClass].map((item,i) => {return this._renderRow(item,i);})}
                </ul>
            </div>
        )
    }
}