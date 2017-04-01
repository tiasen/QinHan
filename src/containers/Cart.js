import {connect} from 'react-redux';
import ConfirmBefore from './../components/cart/ConfirmBefore';
import ConfirmAfter from './../components/cart/ConfirmAfter';
import CartNullPage from '../components/common/CartNullPage';
import {modifyOfCart,deleteOfCart} from '../actions/actions';
class Cart extends React.Component {

    onStateChangeModify (index,data) {
        this.props.dispatch(modifyOfCart(index,data))
    }
    onDelete(index){
        this.props.dispatch(deleteOfCart(index));
    }
    render() {
        const {addToCart,getsList} = this.props;
        if (addToCart.isConfirmed) {
            return <ConfirmAfter />
        } else {
            if (addToCart.list && addToCart.list.length > 0) {
                return (
                    <div style={{width:'100%',height:'100%'}}>
                        <ConfirmBefore onDelete={index => this.onDelete(index)} onStateChangeModify={(index,data) =>this.onStateChangeModify(index,data)} addToCart={addToCart}/>
                    </div>
                )
            } else {
                return <CartNullPage />
            }

        }

    }
}
const mapStateToProps = state => {
    const {addToCart} = state;
    return {
        addToCart
    }
}

export default connect(mapStateToProps)(Cart);
