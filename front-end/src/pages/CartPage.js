import CartComponent from "../component/CartComponent"

function CartPage({cart}) {
    return(
        <div className="CartPage" style={{paddingLeft: 100 + "px", position: "absolute"}}>
            <CartComponent cart={cart}/>
        </div>
    )
}

export default CartPage