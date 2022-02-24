import CartComponent from "../component/CartComponent"
import "../styles/Cart.css"

function CartPage({cart, setCart}) {
    return(
        <div className="CartPage">
            <CartComponent cart={cart} setCart={setCart}/>
        </div>
    )
}

export default CartPage