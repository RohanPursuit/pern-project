import ProductDetailsComponent from "../component/ProductDetailsComponent";

function ProductDetailsPage({cart, setCart}){
    return (
        <div className="AllProductsPage">
            <ProductDetailsComponent cart={cart} setCart={setCart}/>
        </div>
    )
}

export default ProductDetailsPage;