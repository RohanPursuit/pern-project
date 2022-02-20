import {Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import NavBar from "./component/common/NavBar";
import AllProductsPage from "./pages/AllProductsPage";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import CartPage from "./pages/CartPage";
import "./App.css"



function App() {
  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route path="/products" element={<AllProductsPage/>}/>
        <Route path="/products/:id" element={<ProductDetailsPage/>}/>
        <Route path="/cart" element={<CartPage/>}/>
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
 */
