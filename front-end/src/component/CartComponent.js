import axios from "axios"
import {useState, useEffect} from "react"
const URL = process.env.REACT_APP_API_URL

function CartComponent() {
    const [cart, setCart] = useState([])

    useEffect(() => {
        axios.get(`${URL}/cart`)
        .then(response => {
            setCart(response.data.payload)
        })
        .catch(console.log)
    }, [])
    return(
        <div className="CartComponent">
            {cart.map(product => {
                return(
                    <div key={product.id} className="Cart-items">
                        <p>{product.name}</p>
                        <img src={product.image} alt={product.description} />
                        <p>{product.price}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default CartComponent