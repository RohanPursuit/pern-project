const db = require("../db/dbConfig.js")


const getAllInCart = async () => {
    try{
        const items = await db.any("SELECT * FROM cart")
        return {
            success: true,
            payload: items
        }
    } catch(err){
        return {
            success: false,
            payload: err
        }
    }
}

const addItem = async (item) => {
    /**
     * Query item id, if already exist in cart then increase item count
     */
    try{
        const addedItem = await db.one("INSERT INTO cart (name, description, price, onSale, image) VALUE")
        return {
            success: true,
            payload: addedItem
        }
    } catch(err){
        return {
            success: false,
            payload: err
        }
    }
}

const deleteItem = async (id) => {
    try{
        const deletedItem = await db.one("DELETE FROM cart WHERE id=$1", id)
        return {
            success: true,
            payload: deletedItem
        }
    } catch(err){
        return {
            success: false,
            payload: err
        }
    }
}

module.exports = {
    getAllInCart,
    addItem, 
    deleteItem, 
}