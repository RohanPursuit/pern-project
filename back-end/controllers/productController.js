const express = require("express")

const products = express.Router()

products.get("/", (request, response) => {
    console.log("Get /products")
    response.status(200).json({
        success: true,
        payload: "All Products coming right up"
    })
})

module.exports = products