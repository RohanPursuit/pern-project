import axios from "axios";
import {useState, useEffect} from "react"
import {Link, useParams, useNavigate} from "react-router-dom"
import Ratio from "react-bootstrap/Ratio"
const URL = process.env.REACT_APP_API_URL

function VendorProductDetailsComponent () {
    const nav = useNavigate()
    const {id} = useParams()
    const [product, setProduct] = useState({})

    const handleDelete = () => {
        axios.delete(`${URL}/products/${id}`)
        .then(() => {
            nav("/vendor/products")
        })
    }

    useEffect(() => {
        axios.get(`${URL}/products/${id}`)
        .then(response => {
            setProduct(response.data.payload)
        })
        .catch(console.log)
    }, [id])


    return (
        <div className="Product-details" style={{paddingLeft: 100 + "px"}}>
            <Ratio aspectRatio="1x1">
                <img src={product.image} alt={product.description} />
            </Ratio>
            <p>{product.name}</p>
            <p>{product.rating}</p>
            <p>{product.description}</p>
            <p>{product.price}</p>
            <Link to={"/vendor/products/" + id + "/edit"}>
                EDIT
            </Link>
            <button onClick={handleDelete}>DELETE</button>
        </div>
    )
}

export default VendorProductDetailsComponent