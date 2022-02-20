import CartComponent from "../component/CartComponent"

function CartPage() {
    return(
        <div className="CartPage" style={{paddingLeft: 100 + "px", position: "absolute"}}>
            <CartComponent/>
        </div>
    )
}

export default CartPage