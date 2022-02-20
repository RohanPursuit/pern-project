const db = require("../db/dbConfig.js")

const getAllProducts = async (vid) => {
    try{
        if(vid !== undefined){
            const products = await db.any("SELECT * FROM products WHERE vid=$1", vid)
            return {
                success: true,
                payload: products
            } 
        }else {
            const products = await db.any("SELECT * FROM products")
            return {
                success: true,
                payload: products
            }  
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
        const product = await db.one("SELECT * FROM products WHERE id=$1", id);
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

const addProduct = async (item) => {
    try {
        const {name, description, price, onSale, image} = item 
        const product = await db.one(
        "INSERT INTO products (name, description, price, onSale, image) VALUES($1, $2, $3, $4, $5) RETURNING *",
        [name, description, price, onSale, image]
        );
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

const deleteProduct = async (id) => {
    try {
        const deletedProduct = await db.one(
        "DELETE FROM products WHERE id=$1 RETURNING *",
        id
        );
        return {
            success: true,
            payload: deletedProduct
        }  
    } catch (err){
        return {
            success: false,
            payload: err
        } 
    }
};  

const editProduct = async (id, product) => {
    try {
        const {name, description, price, onSale, image} = product;
 
      const updatedProduct = await db.one("UPDATE Products SET name=$1, description=$2, price=$3, onSale=$4, image=$5  WHERE id=$6 RETURNING *",
      [name, description, price, onSale, image, id] );
      return {
        success: true,
        payload: updatedProduct
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
    addProduct,
    deleteProduct,
    editProduct
}