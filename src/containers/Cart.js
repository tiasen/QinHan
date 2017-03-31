import {connect} from 'react-redux';
import ConfirmBefore from './../components/cart/ConfirmBefore';
import ConfirmAfter from './../components/cart/ConfirmAfter';
import CartNullPage from '../components/common/CartNullPage';
import {modifyOfCart} from '../actions/actions';
class Cart extends React.Component {
    componentDidMount() {
        console.log(this.props)

    }

    onshow(data) {
        const {addToCart,getsList}  = this.props;
        Popup.show(
            <PopupList addToCart={addToCart} currentIndex = {index}  onClose = {(sel,d) =>this.onClose(sel,d)} />, { animationType: 'slide-up', maskProps, maskClosable: false }
        );
    }

    onStateChangeModify = () => {
        this.props.dispatch(modifyOfCart())
    }
    render() {
        const {addToCart,getsList} = this.props;
        if (addToCart.isConfirmed) {
            return <ConfirmAfter />
        } else {
            if (addToCart.list && addToCart.list.length > 0) {
                return (
                    <div style={{width:'100%',height:'100%'}}>
                        <ConfirmBefore onStateChangeModify={this.onStateChangeModify} addToCart={addToCart}/>
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
    console.log(addToCart);
    return {
        addToCart
    }
}

export default connect(mapStateToProps)(Cart);
