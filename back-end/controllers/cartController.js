const express = require("express")
const {getAllInCart, addItem, deleteItem} = require("../queries/cart")
const cart = express.Router()

cart.get("/", async (request, response) => {
    console.log("Get /cart")
    const items = await getAllInCart()
    if(items.success) return response.status(200).json(items)

    response.status(404).json(items)
})

cart.post("/", async (request, response) => {
    console.log("Post /cart")
    const item = await addItem(request.body)
    if(item.success) return response.status(200).json(item)

    response.status(404).json(item)
})

cart.delete("/:id", async (request, response) => {
    console.log("Post /cart")
    const item = await deleteItem(request.params.id)
    if(item.success) return response.status(200).json(item)

    response.status(404).json(item)
})

cart.put("/:id", async (request, response) => {
    console.log("Post /cart")
    const item = await updateCount(request.params.id)
    if(item.success) return response.status(200).json(item)

    response.status(404).json(item)
})


module.exports = cart