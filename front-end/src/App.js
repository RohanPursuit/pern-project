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
import "./App.css"



function App() {
  const [cart, setCart] = useState([])
  return (
    <div className="App">
      <NavBar/>
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
  );
}

export default App;








/**
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
