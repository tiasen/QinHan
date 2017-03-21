
export default class MoneyInfo extends React.Component{
    constructor(prop){
        super(prop);
    }
    render(){
        return (
            <div className='moneyInfo'>
                <div className='header'>                    
                    <h5>消费信息</h5>
                    <div className='info'>                    
                        <span>桌号：A05</span>
                        <span>人数：3</span>
                        <span>下单时间：14:24</span>
                    </div>
                </div>
                
                <div className='section'>
                    <span>应付：￥100.00</span>
                    <span>已付：￥100.00</span>
                    <span>还需支付：￥100.00</span>
                    <span className="button"><button>立即支付</button></span>
                </div>
            </div>
        )
    }
}