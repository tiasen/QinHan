import EasyScroller from '../../lib/scroller/EasyScroller';
export default class SelectedList extends React.Component{
    constructor(prop) {
        super(prop);
        // this.myScroll;
        this.state = {
            myScroller:{},
            data:[
                {name:"水煮肉片",price:'12:00',isDone:false,num:1},
                {name:"水煮肉片",price:'12:00',isDone:false,num:1},
                {name:"水煮肉片",price:'12:00',isDone:false,num:1},
                {name:"水煮肉片",price:'12:00',isDone:false,num:1},
                {name:"水煮肉片",price:'12:00',isDone:false,num:1},
                {name:"水煮肉片",price:'12:00',isDone:false,num:1},
                {name:"水煮肉片",price:'12:00',isDone:false,num:1},
                {name:"水煮肉片",price:'12:00',isDone:false,num:1},
                {name:"水煮肉片",price:'12:00',isDone:false,num:1},
                {name:"水煮肉片",price:'12:00',isDone:false,num:1}
            ]
        }
    }
    componentDidMount(){
        const node = this.refs.scroller;
        this.setState({
            myScroller:new EasyScroller(node)
        })
    }
    render(){
        return (
            <div className="selectedList" ref="selectedList">
                <div style={{width:'100%',height:'100%',position:'relative',overflow:'hidden'}}>
                    <ul ref="scroller" style={{width:'100%',position:'absolute'}}>
                        <li><h4>已下单的菜</h4></li>
                        {this.state.data.map((item,i) =>
                            <li key={i}>
                                <header>{item.name}</header>
                                <div>
                                    <span className="price">￥：{item.price}</span>
                                    <span>{item.num}份</span>
                                    <span>已上菜</span>
                                </div>
                            </li>)}
                    </ul>
                </div>
            </div>
        )
    }
}