import VendorProductsComponent from "../component/VendorProductsComponent"
import {Link} from "react-router-dom"
import Button from "react-bootstrap/Button"
import "../styles/VendorProducts.css"

function VendorProductsPage () {
    return(
        <div className="VendorProductsPage">
            <Button as={Link} className="VendorProducts-create" to="/vendor/products/create">
                Create
            </Button>
           <VendorProductsComponent/> 
        </div>
    )
}

export default VendorProductsPage