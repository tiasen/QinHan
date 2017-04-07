/**
 * Created by 365969 on 2017/4/6.
 */
import {Row,Col,Button} from 'antd';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import Collection from '../../components/common/Collection';
import BasicSelect from '../../components/common/BasicSelect';
import MenuItem from '../../components/common/MenuItem';

import * as actions from '../../actions/action';

const selectList = ['taste','size','other'];

class List extends React.Component{
    state = {
        selectValue:'taste'
    }
    componentDidMount(){
        console.log(this.props)
        const {ifShouldGetMenuList} = this.props;
        ifShouldGetMenuList(this.state.selectValue)
    }
    render(){
        const {menuList,addMenuItem} = this.props;
        console.log(this.props)
        return (
            <div className="menuList">
                <header style={{paddingBottom:24}}>
                    <Row gutter={16}>
                        <Col span={5}><BasicSelect list={selectList} selectValue={selectList[0]} handleSelected={data => this.handleSelected(data)} /></Col>
                        <Col span={5}><Collection  titleText={this.state.selectValue} addMenuItem={addMenuItem} history={this.props.history} >addItem</Collection></Col>

                    </Row>
                    </header>
                <section>
                    {
                        menuList && menuList[this.state.selectValue] && menuList[this.state.selectValue].length > 0 ?
                        menuList[this.state.selectValue].map((item,i) => (<MenuItem key={i} />))  :
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

