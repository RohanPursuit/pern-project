import ProductDetailsComponent from "../component/ProductDetailsComponent";
import "../styles/ProductDetail.css"

function ProductDetailsPage({cart, setCart}){
    return (
        <div className="ProductDetailsPage">
            <ProductDetailsComponent cart={cart} setCart={setCart}/>
        </div>
    )
}

export default ProductDetailsPage;