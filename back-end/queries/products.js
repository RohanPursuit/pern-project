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

module.exports = {
    getAllProducts
}