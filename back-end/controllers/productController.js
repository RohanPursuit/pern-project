const express = require("express")
const {getAllProducts, getProduct} = require("../queries/products")

const products = express.Router()

products.get("/", async (request, response) => {
    console.log("Get /products")
    const products = await getAllProducts()
    if(products.success) return response.status(200).json(products)

    //If error status 404
    response.status(404).json(products)
})

products.get("/:id", async (request, response) => {
    console.log("Get /products/:id")
    const products = await getProducts(id)
    if(products.success) return response.status(200).json(products)
    
    //If error status 404
    response.status(404).json(products)
})

products.post("/", async (request, response) => {
    console.log("post /products")
    response.status(200).json({
        success: true,
        payload: "Why thank you good sir."
    })
})

products.delete("/:id", async (request, response) => {
    console.log("Delete /products/:id")
    response.status(200).json({
        success: true,
        payload: "How dear you..."
    })
})

products.put("/:id", async (request, response) => {
    console.log("Put /products/:id")
    response.status(200).json({
        success: true,
        payload: "Oh, ok..."
    })
})

module.exports = products