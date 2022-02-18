const db = require("../db/dbConfig.js")

const getAllProducts = async () => {
    try{
        const products = db.any("SELECT * FROM test")
        return products  
    } catch (err){
        return err
    }
}

module.exports = {
    getAllProducts
}