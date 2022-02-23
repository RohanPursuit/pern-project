import {useState, useEffect} from "react"
import {useParams} from "react-router-dom"
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

function EditProductComponent () {
    const nav = useNavigate()
    const {id} = useParams()
    const [product, setProduct] = useState({
        name: '',
        description: '',
        price: 0,
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
        console.log(product)
       axios.put(`${URL}/products/${id}`, product)
       .then((response) => {
        console.log(response)
        nav(`/vendor/products/${id}`)
       })
       .catch(console.log)
    }
    
    useEffect(() => {
        axios.get(`${URL}/products/${id}`)
        .then(response => {
            response.data.payload.vid = 1
            setProduct(response.data.payload)
            console.log(response.data.payload)
        })
        .catch(console.log)
    }, [id])


    return (
        <div className="EditProduct">
            <Form onSubmit={handleSubmit} action="">
            <fieldset>
                <Row>
                    <Col xs={7}>
            <Form.Group className="mb-3">
            <Form.Label htmlFor="price">Name</Form.Label>
                <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1"><ArrowRight/></InputGroup.Text>
                <Form.Control onChange={handleChange} size="lg" name="name" type="text" value={product.name}/>
                </InputGroup>
            </Form.Group>
            </Col>
            <Col>
            <Form.Group className="mb-3">
                <Form.Label htmlFor="price">Price</Form.Label>
                <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1">$</InputGroup.Text>
                <Form.Control onChange={handleChange} value={product.price} size="lg" name="price" type="number"/>
                </InputGroup>
            </Form.Group>
            </Col>
            </Row>
            <Form.Group className="mb-3">
                <Form.Label htmlFor="description">Description</Form.Label>
                <Form.Control onChange={handleChange} value={product.description} size="lg" as="textarea" name="description" type="text"/>
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label htmlFor="image">Image</Form.Label>
                <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1"><Image/></InputGroup.Text>
                <Form.Control onChange={handleChange} value={product.image} size="lg" name="image"  type="text" placeholder="https:"/>
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

export default EditProductComponent