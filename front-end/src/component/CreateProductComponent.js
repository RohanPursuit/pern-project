import {useState} from "react"
import axios from "axios"
import Button from "react-bootstrap/Button"
import Form from 'react-bootstrap/Form'
import InputGroup from "react-bootstrap/InputGroup"
import { ArrowRight, Image } from 'react-bootstrap-icons';
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import { useNavigate } from "react-router-dom"
const URL = process.env.REACT_APP_API_URL
const VID = process.env.REACT_APP_VID

function CreateProductComponent () {
    const nav = useNavigate()
    const [product, setProduct] = useState({
        sale: false, 
        image: 'https://dummyimage.com/400x400/6e6c6e/e9e9f5.png&text=No+Image',
        vid: VID
    })

    const handleChange = (event) => {
        if(event.target.name === "price"){
            setProduct({...product, [event.target.name]: Number(event.target.value)})  
        }else {
           setProduct({...product, [event.target.name]: event.target.value}) 
        }
        
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        if(product.image.length === 0){
            product.image = null
        }
       axios.post(`${URL}/products`, product)
       .then((response) => {
        console.log(response)
        nav(`/vendor/products/${response.data.payload.id}`)
       })
       .catch(console.log)
    }

    return (
        <div className="CreateProduct">
            <Form onChange={handleChange} onSubmit={handleSubmit} action="">
            <fieldset>
                <Row>
                    <Col xs={7}>
            <Form.Group className="mb-3">
            <Form.Label htmlFor="price">Name</Form.Label>
                <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1"><ArrowRight/></InputGroup.Text>
                <Form.Control size="lg" name="name" type="text" required/>
                </InputGroup>
            </Form.Group>
            </Col>
            <Col>
            <Form.Group className="mb-3">
                <Form.Label htmlFor="price">Price</Form.Label>
                <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1">$</InputGroup.Text>
                <Form.Control size="lg" name="price" type="number" required/>
                </InputGroup>
            </Form.Group>
            </Col>
            </Row>
            <Form.Group className="mb-3">
                <Form.Label htmlFor="description">Description</Form.Label>
                <Form.Control size="lg" as="textarea" name="description" type="text" required/>
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label htmlFor="image">Image</Form.Label>
                <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1"><Image/></InputGroup.Text>
                <Form.Control size="lg" name="image" type="text" placeholder="https:"/>
                <Button id="button-addon1">
                    Preview
                </Button>
                </InputGroup> 
                {/* <Button onClick={handleImageTag}>{imageTag.props.name}</Button> */}
            </Form.Group>
                <Button className="create-submit-bt" type="submit">Submit</Button>
            </fieldset>
            </Form>
        </div>
    )
}

export default CreateProductComponent