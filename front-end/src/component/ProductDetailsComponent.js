import axios from "axios";
import {useState, useEffect} from "react"
import {useParams} from "react-router-dom"
const URL = process.env.REACT_APP_API_URL

function ProductDetailsComponent({cart, setCart}){
    const {id} = useParams()
    const [product, setProduct] = useState({})

    const handleCart = () => {
        let foundItem = false
        cart.forEach(cartProduct => {
            if(cartProduct.id === product.id){
                foundItem = true
                cartProduct.count++
            }
        })

        if(!foundItem){
            product.count = 1
           setCart([...cart, product]) 
        }
        
    }

    useEffect(() => {
        axios.get(`${URL}/products/${id}`)
        .then(response => {
            setProduct(response.data.payload)
        })
        .catch(console.log)
    }, [id])


    return (
        <div className="Product-details">
            <img src={product.image} alt={product.description} />
            <p>{product.name}</p>
            <p>{product.rating}</p>
            <p>{product.description}</p>
            <p>{product.price}</p>
            <button onClick={handleCart}>Add to cart</button>
        </div>
    )
}

export default ProductDetailsComponent;