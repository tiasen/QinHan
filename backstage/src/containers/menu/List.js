/**
 * Created by 365969 on 2017/4/6.
 */
import {Row,Col,Button} from 'antd';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import Collection from '../../components/menu/Collection';
import BasicSelect from '../../components/common/BasicSelect';
import MenuItem from '../../components/menu/MenuItem';

import * as actions from '../../actions/action';

const selectList = ['class1','class2','class3'];

class List extends React.Component{
    state = {
        selectValue:selectList[0]
    }
    componentDidMount(){
        const {ifShouldGetMenuList} = this.props;
        ifShouldGetMenuList(this.state.selectValue)
    }
    componentWillReceiveProps(nextProps){
        //console.log(nextProps.menuList[this.state.selectValue] != menuList[this.state.selectValue])
        const {ifShouldGetMenuList,menuList} = this.props;
        if(menuList && (nextProps.menuList[this.state.selectValue] != menuList[this.state.selectValue])){

            ifShouldGetMenuList(this.state.selectValue)
        }
    }
    render(){
        const {menuList,addMenuItem} = this.props;
        return (
            <div className="menuList">
                <header style={{paddingBottom:24}}>
                    <Row gutter={16}>
                        <Col span={5}><BasicSelect list={selectList} selectValue={selectList[0]} handleSelected={data => this.handleSelected(data)} /></Col>
                        <Col span={5}><Collection menuList={menuList} titleText={this.state.selectValue} addMenuItem={addMenuItem} history={this.props.history} >addItem</Collection></Col>

                    </Row>
                    </header>
                <section>
                    {
                        menuList && menuList[this.state.selectValue] && menuList[this.state.selectValue].list && menuList[this.state.selectValue].list.length > 0 ?
                        menuList[this.state.selectValue].list.map((item,i) => (<MenuItem key={i} data={item} />))  :
                            <div>null</div>
                    }
                </section>
            </div>

        )
    }
    handleSelected(data){
        const {ifShouldGetMenuList} = this.props;
        console.log(this.props)
        console.log(data)
        ifShouldGetMenuList(data)
        this.setState({
            selectValue:data
        })

    }
}

const mapStateToProps = state => {
    const {menuList} = state;
    return {
        menuList
    }
}
const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        addMenuItem:actions.addMenuItem,
        ifShouldGetMenuList:actions.ifShouldGetMenuList
    },dispatch)
}
export default connect(mapStateToProps,mapDispatchToProps)(List)

