const express = require("express")
const {getAllProducts, getProduct, addProduct, deleteProduct, editProduct} = require("../queries/products")

const products = express.Router()

products.get("/", async (request, response) => {
    console.log("Get /products")
    //check user auth

    const products = await getAllProducts()
    if(products.success) return response.status(200).json(products)

    //If error status 404
    response.status(404).json(products)
})

products.get("/:id", async (request, response) => {
    console.log("Get /products/:id")
    //check user auth

    const products = await getProduct(request.params.id)
    if(products.success) return response.status(200).json(products)
    
    //If error status 404
    response.status(404).json(products)
})

products.post("/", async (request, response) => {
    console.log("post /products")
    //check user auth

    //check incoming data types
    if(x = false) return response.status(404).json({x})
    const product = await addProduct(request.body)
    if(product.success) return response.status(200).json(product)
    
    //If error status 404
    response.status(404).json(product)
})

products.delete("/:id", async (request, response) => {
    console.log("Delete /products/:id")
    //check user auth

    //check incoming data types
    if(x = false) return response.status(404).json({x})
    const product = await deleteProduct(request.params.id)
    if(product.success) return response.status(200).json(product)
    
    //If error status 404
    response.status(404).json(product)
})

products.put("/:id", async (request, response) => {
    console.log("Put /products/:id")
    //check user auth
    
    //check incoming data types
    if(x = false) return response.status(404).json({x})
    const product = await editProduct(request.params.id, request.body)
    if(product.success) return response.status(200).json(product)
    
    //If error status 404
    response.status(404).json(product)
})

module.exports = products