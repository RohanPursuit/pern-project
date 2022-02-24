import {useNavigate} from 'react-router-dom'
import Card from "react-bootstrap/Card"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"
import Ratio from "react-bootstrap/Ratio"
import Button from "react-bootstrap/Button"

function CartComponent({cart, setCart}) {
    const nav = useNavigate()

    return(
        <div className="CartComponent">
            <h1>Total: ${
                cart.reduce((a,b) => {
                 const c = Number(a.price) + (Number(b.price) * Number(b.count))
                 return {price: c}
                }, {price: 0}).price.toFixed(2)
            }</h1>
            {cart.map(product => {
                return(
                    <Card key={product.id}>
                           <Row>
                           <Col>
                           <Ratio aspectRatio="1x1">
                               <Card.Img onClick={() => nav(`/products/${product.id}`)} className="CartComponent-img" variant="top" src={product.image} />
                           </Ratio>
                           </Col>
                           <Col>
                           <Card.Body>
                             <Card.Title>{product.name}</Card.Title>
                             <Card.Text>
                             Price: {Number(product.price).toFixed(2)}
                             </Card.Text>
                             <Card.Text>
                             Description: {product.description}
                             </Card.Text>
                             <Card.Text>
                             Rating: {product.rating}
                             </Card.Text>
                             <Card.Text>
                             Count: {product.count}
                             </Card.Text>
                           </Card.Body>
                           <Button onClick={() => setCart(cart.filter(item => item.id !== product.id))} variant='danger'>Delete</Button>
                           </Col>
                           </Row>
                         </Card>
                )
            })}
        </div>
    )
}

export default CartComponent