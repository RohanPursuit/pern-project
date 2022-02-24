import axios from "axios";
import {useState, useEffect} from "react"
import {Link, useParams, useNavigate} from "react-router-dom"
import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"
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
          <Button as={Link} to={"/vendor/products/" + id + "/edit"} variant="primary">EDIT</Button>
          <Button style={{marginLeft: 100 + "px"}} onClick={handleDelete} variant="primary">DELETE</Button>
        </Card.Body>
          <Button onClick={()=> nav(-1)}>Back</Button>
      </Card>
    )
}

export default VendorProductDetailsComponent