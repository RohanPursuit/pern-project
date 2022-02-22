import {useState} from "react"
import {useParams} from "react-router-dom"
import axios from "axios"
const URL = process.env.REACT_APP_API_URL
const VID = process.env.REACT_APP_VID

function EditProductComponent () {
    const {id} = useParams()
    const [product, setProduct] = useState({
        sale: false, 
        image: 'https://dummyimage.com/400x400/6e6c6e/e9e9f5.png&text=No+Image',
        vid: VID
    })

    const [imageTag, setImageTag] = useState(<input name="Upload Image Instead" id="image" type="text" />)

    const handleImageTag = (event) => {
        console.log(imageTag)
        if(imageTag.props.type === "text"){
            setImageTag(<input name="Upload URL Instead" id="image" type="file" accept="image/*" />)
        } else {
            setImageTag(<input name="Upload Image Instead" id="image" type="text" />)
        }
    }

    const handleChange = (event) => {
        if(event.target.id === "price"){
            setProduct({...product, [event.target.id]: Number(event.target.value)})  
        }else {
           setProduct({...product, [event.target.id]: event.target.value}) 
        }
        
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(product)
       axios.put(`${URL}/products/${id}`, product)
       .then((response) => {
        console.log(response)
       })
       .catch(console.log)
    }
    return (
        <div className="EditProductComponent">
            <form onChange={handleChange} onSubmit={handleSubmit} action="">
                <label htmlFor="name">Name: </label>
                <input id="name" type="text" />
                <label htmlFor="description">Description: </label>
                <input id="description" type="text" />
                <label htmlFor="price">Price: </label>
                <input id="price" type="number" />
                <label htmlFor="image">Image: </label>
                {imageTag}
                <input type="submit" />
            </form>
                <button onClick={handleImageTag}>{imageTag.props.name}</button>
        </div>
    )
}

export default EditProductComponent