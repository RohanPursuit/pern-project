import axios from "axios";
import {useState, useEffect} from "react"
import {useParams} from "react-router-dom"
const URL = process.env.REACT_APP_API_URL

function ProductDetailsComponent(){
    const {id} = useParams()
    const [product, setProduct] = useState({})

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
        </div>
    )
}

export default ProductDetailsComponent;