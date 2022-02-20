import VendorProductsComponent from "../component/VendorProductsComponent"
import {Link} from "react-router-dom"

function VendorProductsPage () {
    return(
        <div className="VendorProductsPage" style={{paddingLeft: 100 + "px"}}>
            <Link to="/vendor/products/create">
                Create
            </Link>
           <VendorProductsComponent/> 
        </div>
    )
}

export default VendorProductsPage