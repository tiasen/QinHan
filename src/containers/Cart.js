import {connect} from 'react-redux';
import ConfirmBefore from './../components/cart/ConfirmBefore';
import ConfirmAfter from './../components/cart/ConfirmAfter';
import CartNullPage from '../components/common/CartNullPage';
 class Cart extends React.Component{
    componentDidMount(){
        console.log(this.props)

    }
    render(){
        const {addToCart} = this.props;
        if(addToCart.isConfirmed){
            return <ConfirmAfter />
        }else{
            if(addToCart.list && addToCart.list.length > 0){
                return (
                    <div style={{width:'100%',height:'100%'}}>
                        <ConfirmBefore data={addToCart} />
                    </div>
                )
            }else{
                return <CartNullPage />
            }

        }

    }
}

const mapStateToProps = state => {
    const {addToCart} = state;
    console.log(addToCart);
    return{
        addToCart
    }
}

export default connect(mapStateToProps)(Cart);
