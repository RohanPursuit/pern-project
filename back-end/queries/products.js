const db = require("../db/dbConfig.js")

const getAllProducts = async () => {
    try{
        const products = await db.any("SELECT * FROM products")
        return {
            success: true,
            payload: products
        }  
    } catch (err){
        return {
            success: false,
            payload: err
        } 
    }
}

const getProduct = async (id) => {
    try{
        const product = await db.one("SELECT * FROM products WHERE id=$1", id)
        return {
            success: true,
            payload: product
        }  
    } catch (err){
        return {
            success: false,
            payload: err
        } 
    }
}

module.exports = {
    getAllProducts,
    getProduct,
}