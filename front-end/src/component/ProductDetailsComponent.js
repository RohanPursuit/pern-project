import axios from "axios";
import {useState, useEffect} from "react"
import {useParams, useNavigate} from "react-router-dom"
import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"
const URL = process.env.REACT_APP_API_URL

function ProductDetailsComponent({cart, setCart}){
    const nav = useNavigate()
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
        <Card className="Product-details" style={{ width: '18rem' }}>
        <Card.Img variant="top" src={product.image} />
        <Card.Body>
          <Card.Title>{product.name}</Card.Title>
          <Card.Text>
          Price: ${Number(product.price).toFixed(2)}
          </Card.Text>
          <Card.Text>
          Description: {product.description}
          </Card.Text>
          <Card.Text>
          Rating: {product.rating}
          </Card.Text>
          <Button onClick={handleCart} variant="primary">Add to cart</Button>
          <Button onClick={()=> nav(-1)} style={{marginLeft: 80 +"px"}}>Back</Button>
        </Card.Body>
      </Card>
    )
}

export default ProductDetailsComponent;