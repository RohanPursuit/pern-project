const db = require("../db/dbConfig.js")

const getAllProducts = async () => {
    try{
        const products = db.any("SELECT * FROM test")
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
        const product = db.any("SELECT * FROM test WHERE id=$id", id)
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