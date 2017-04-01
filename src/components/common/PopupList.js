/**
 * Created by 365969 on 2017/3/31.
 */
import {  List, Button,Icon,Accordion ,Flex} from 'antd-mobile';


import Count from './Count';
import CheckboxGroup from './CheckboxGroup';
import RadioGroup from './RadioGroup';

export default class PopupList extends React.Component{

    onChange (obj,name,data){
        const {isModify} = this.props;
        obj[name] = data;
        if(typeof data.addM != 'undefined'){
            if(name === 'taste'){
                obj.tasteAddM = Number(data.addM)
            }
            if(name === 'size'){
                obj.sizeAddM = Number(data.addM)
            }

        }
        if(isModify){
            obj.isChanged = true;
        }
        obj.subtotal = (obj.tasteAddM + obj.sizeAddM + obj.price) * obj.count;

        $('#menu-subtotal').text(obj.subtotal);
        //console.log(obj)

        return obj;
    }
    render(){
        const {isModify,d} = this.props;
        var data;
        if(isModify){
            data = d.courceData;
        }else{
            data = d;
        }
        let obj = {
            taste : data.other['taste'] && data.other['taste'][0] ? data.other['taste'][0] : '',
            size : data.other['size'] && data.other['size'][0] ? data.other['size'][0] : '',
            otherDemand : '',
            count:1,
            price:data.price,
            name:data.name,
            sizeAddM:0,
            tasteAddM:0,
            subtotal:data.price,
            courceData:data,
            isChanged:false
        };
        return (
            <div>
                <List renderHeader={
                    () => (
                        <div style={{ position: 'relative' }}>
                          {data.name}
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
                            <Accordion.Panel header="分量" style={{display:data.other['size'] && data.other['size'].length > 0 ? 'block':'none' }}>
                                {data.other['size'] && data.other['size'].length > 0 ?<RadioGroup modifyData={isModify?d['size']:''} onSelected={size => this.onChange(obj,'size',size)} data={data.other['size']} /> : []}
                            </Accordion.Panel>
                            <Accordion.Panel header="口味" style={{display:data.other['taste'] && data.other['taste'].length > 0 ? 'block':'none' }}>
                                {data.other['taste'] && data.other['taste'].length > 0 ? <RadioGroup  modifyData={isModify?d['taste']:''} onSelected={taste => this.onChange(obj,'taste',taste)} data={data.other['taste']} /> : []}
                            </Accordion.Panel>
                            <Accordion.Panel header="其他需求" style={{display:data.other['otherDemand'] && data.other['otherDemand'].length > 0 ? 'block':'none' }}>
                                {data.other['otherDemand'] && data.other['otherDemand'].length > 0 ? <CheckboxGroup  modifyData={isModify?d['otherDemand']:''}  onSelected={otherDemand => this.onChange(obj,'otherDemand',otherDemand)} data={data.other['otherDemand']} /> : []}
                            </Accordion.Panel>
                        </Accordion>
                        <Count text="份数" defaultValue={isModify ? d.count:1} onChooseNmber={(count) => this.onChange(obj,'count',count)} />

                    </div>
                </List>
                <ul style={{ padding: '0.18rem 0.3rem', listStyle: 'none' }}>
                    <li>小计：<span style={{color:'#f00'}}>￥ <span id="menu-subtotal">{isModify ? d.subtotal : data.price}</span></span></li>
                    <li style={{ marginTop: '0.18rem' }}>
                        <Button type="primary" onClick={() => this.onClose('cancel',obj)}>加入点菜单</Button>
                    </li>
                </ul>
            </div>
        )
    }
    onClose(cel,d){
        const {onClose,currentIndex} = this.props;
        onClose(cel,d,currentIndex);

   }
}