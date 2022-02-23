import {Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import NavBar from "./component/common/NavBar";
import AllProductsPage from "./pages/AllProductsPage";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import CartPage from "./pages/CartPage";
import VendorProductsPage from "./pages/VendorProductsPage";
import VendorProductDetailsPage from "./pages/VendorProductDetailsPage";
import CreateProductPage from "./pages/CreateProductPage";
import EditProductPage from "./pages/EditProductPage";
import {useState} from "react"
import 'bootstrap/dist/css/bootstrap.min.css'
import "./App.css"



function App() {
  const [cart, setCart] = useState([])
  return (
    <div className="App">
      <NavBar/>
      <div className="Route-content">
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route path="/products" element={<AllProductsPage/>}/>
        <Route path="/products/:id" element={<ProductDetailsPage cart={cart} setCart={setCart}/>}/>
        <Route path="/cart" element={<CartPage cart={cart} />}/>
        <Route path="/vendor/products" element={<VendorProductsPage/>}/>
        <Route path="/vendor/products/create" element={<CreateProductPage/>}/>
        <Route path="/vendor/products/:id" element={<VendorProductDetailsPage/>}/>
        <Route path="/vendor/products/:id/edit" element={<EditProductPage/>}/>
      </Routes>
      </div>
    </div>
  );
}

export default App;








/**
 * todo after lunch
 * 1. commit all changes
 * 1.5 Style NavBar
 * 2. style large product card with full info - homepage, product page, vender
 *  product page
 * 3. style single product info
 * 4. Cart page, style and receipt -- with some checkout conformation-- should
 * clear cart after checkout
 * 5. Dummy sign In page
 * 
 * 
 * Complete user stories 4 to 6 ---- done
 * no 404 page
 * 
 * Didn't create recording.
 * Don't have readme
 * 
 * 
 * Include a last Item feature where if the item that a customer wants to buy 
 * is out of stock they can pay any customer that as recently checked out that
 * item extra money so that the item can be delivered to them instead.
 * 
 * When the last item of a product is checked out, all products of that kind
 * which haven't been delivered yet can be bided on by other users. That money 
 * goes to the user that checked out the product if they accept the offer.
 * 
 * Would like to allow venders to upload images of their product
 * Noted use google drive
 * 
 * 
 * Maybe add default reviews
 * have the ability to change reviews as a single user
 */
