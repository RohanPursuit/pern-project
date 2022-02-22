import axios from "axios"
// import {useState, useEffect} from "react"
import {useState, useEffect} from "react"
const URL = process.env.REACT_APP_API_URL

function CartComponent({cart}) {
    // const [cart, setCart] = useState([])
    const [total, setTotal] = useState(0)

    // useEffect(() => {
    //     axios.get(`${URL}/cart`)
    //     .then(response => {
    //         setCart(response.data.payload)
    //     })
    //     .catch(console.log)
    // }, [])
    return(
        <div className="CartComponent">
            {cart.map(product => {
                return(
                    <div key={product.id} className="Cart-items">
                        <p>Name: {product.name}</p>
                        <img src={product.image} alt={product.description} />
                        <p>Price: {product.price}</p>
                        <p>Count: {product.count}</p>
                    </div>
                )
            })}
            {
                cart.reduce((a,b) => {
                 const c = a.price + (b.price * b.count)
                 return {price: c}
                }, {price: 0}).price
            }
        </div>
    )
}

export default CartComponent