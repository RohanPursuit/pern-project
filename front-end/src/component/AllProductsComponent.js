import axios from "axios";
import {useState, useEffect} from "react"
import {Link} from "react-router-dom"
const URL = process.env.REACT_APP_API_URL

function AllProductsComponent(){
    const [products, setProducts] = useState([])

    useEffect(() => {
        axios.get(`${URL}/products`)
        .then(response => {
            setProducts(response.data.payload)
        })
        .catch(console.log)
    }, [])


    return (
        <div className="AllProductsPage">
            {products.map(product => {
                return (
                    <div className="Product-card" key={product.id}>
                        <Link to={"/products/"+ product.id}>
                            <img src={product.image} alt={product.description} />
                            <p>Name: {product.name}</p>
                            <p>Rating: {product.rating}</p>
                            <p>Description: {product.description}</p>
                            <p>Price: {product.price}</p>
                        </Link>
                    </div>
                    
                )
            })}
        </div>
    )
}

export default AllProductsComponent;