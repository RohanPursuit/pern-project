import axios from "axios";
import {useState, useEffect} from "react"
import {Link} from "react-router-dom"
import Card from "react-bootstrap/Card"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"
import Ratio from "react-bootstrap/Ratio"
const URL = process.env.REACT_APP_API_URL

function AllProductsComponent({setFeatured}){
    const [products, setProducts] = useState([])

    useEffect(() => {
        axios.get(`${URL}/products`)
        .then(({data}) => {
            setProducts(data.payload)
            if(setFeatured !== undefined){
                setFeatured(data.payload.filter(({featured}) => featured))
            }
        })
        .catch(console.log)
    }, [setFeatured])


    return (
        <div className="AllProducts">
            {products.map(product => {
                return (
                    <Card as={Link} to={"/products/"+ product.id} key={product.id}>
                    <Row>
                    <Col>
                    <Ratio aspectRatio="1x1">
                        <Card.Img className="AllProducts-img" variant="top" src={product.image} />
                    </Ratio>
                    </Col>
                    <Col>
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
                    </Card.Body>
                    </Col>
                    </Row>
                  </Card>
                    
                )
            })}
        </div>
    )
}

export default AllProductsComponent;