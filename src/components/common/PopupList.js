/**
 * Created by 365969 on 2017/3/31.
 */
import {  List, Button,Icon,Accordion ,Flex} from 'antd-mobile';


import Count from './Count';
import CheckboxGroup from './CheckboxGroup';
import RadioGroup from './RadioGroup';
export default class PopupList extends React.Component{
    onChange (obj,name,data){
        obj[name] = data;
        if(typeof data.addM != 'undefined'){
            if(name === 'taste'){
                obj.tasteAddM = Number(data.addM)
            }
            if(name === 'size'){
                obj.sizeAddM = Number(data.addM)
            }

        }
        obj.subtotal = (obj.tasteAddM + obj.sizeAddM + obj.price) * obj.count;

        $('#menu-subtotal').text(obj.subtotal);

        //console.log(obj)
        return obj;
    }
    render(){
        const {d} = this.props;
        let data = d.other;
        let obj = {
            taste : d.other['taste'] && d.other['taste'][0] ? d.other['taste'][0] : '',
            size : d.other['size'] && d.other['size'][0] ? d.other['size'][0] : '',
            otherDemand : '',
            count:1,
            price:d.price,
            name:d.name,
            sizeAddM:0,
            tasteAddM:0,
            subtotal:d.price
        };
        return (
            <div>
                <List renderHeader={
                    () => (
                        <div style={{ position: 'relative' }}>
                          {d.name}
                          <span style={{position: 'absolute', right: 3, top: -5}}
                                onClick={() => this.onClose('cancel')}>
                            <Icon type="cross" />
                          </span>
                        </div>
                    )}
                      className="popup-list"
                >
                    <div style={{ marginTop: 10, marginBottom: 10 }}>
                        <Accordion defaultActiveKey="0" className="my-accordion" accordion={true}>
                            <Accordion.Panel header="分量" style={{display:data['size'] && data['size'].length > 0 ? 'block':'none' }}>
                                {data['size'] && data['size'].length > 0 ?<RadioGroup onSelected={size => this.onChange(obj,'size',size)} data={data['size']} /> : []}
                            </Accordion.Panel>
                            <Accordion.Panel header="口味" style={{display:data['taste'] && data['taste'].length > 0 ? 'block':'none' }}>
                                {data['taste'] && data['taste'].length > 0 ? <RadioGroup onSelected={taste => this.onChange(obj,'taste',taste)} data={data['taste']} /> : []}
                            </Accordion.Panel>
                            <Accordion.Panel header="其他需求" style={{display:data['otherDemand'] && data['otherDemand'].length > 0 ? 'block':'none' }}>
                                {data['otherDemand'] && data['otherDemand'].length > 0 ? <CheckboxGroup onSelected={otherDemand => this.onChange(obj,'otherDemand',otherDemand)} data={data['otherDemand']} /> : []}
                            </Accordion.Panel>
                        </Accordion>
                        <Count text="份数" onChooseNmber={(count) => this.onChange(obj,'count',count)} />

                    </div>
                </List>
                <ul style={{ padding: '0.18rem 0.3rem', listStyle: 'none' }}>
                    <li>小计：<span style={{color:'#f00'}}>￥ <span id="menu-subtotal">{d.price}</span></span></li>
                    <li style={{ marginTop: '0.18rem' }}>
                        <Button type="primary" onClick={() => this.onClose('cancel',obj)}>加入点菜单</Button>
                    </li>
                </ul>
            </div>
        )
    }
    onClose(cel,d){
        const {onClose} = this.props;
        onClose(cel,d);
    }
}