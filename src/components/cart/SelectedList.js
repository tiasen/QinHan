import IScroll from '../../lib/iscroll-lite';
export default class SelectedList extends React.Component{
    state = {
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
    componentDidMount(){
        var node = this.refs.selectedList;
        var myIScroll = new IScroll(node);
    }
    render(){
        return (
            <div className="selectedList" ref="selectedList">
                <ul>
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
        )
    }
}