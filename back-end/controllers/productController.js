const express = require("express")

const products = express.Router()

products.get("/", (request, response) => {
    console.log("Get /products")
    response.status(200).json({
        success: true,
        payload: "All Products coming right up"
    })
})

products.get("/:id", (request, response) => {
    console.log("Get /products/:id")
    response.status(200).json({
        success: true,
        payload: "Single Product coming right up"
    })
})

products.post("/", (request, response) => {
    console.log("post /products")
    response.status(200).json({
        success: true,
        payload: "Why thank you good sir."
    })
})



module.exports = products