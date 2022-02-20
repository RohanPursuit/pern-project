// DEPENDENCIES
const cors = require("cors");
const express = require("express");
const productController = require("./controllers/productController")
const cartController = require("./controllers/cartController")

// CONFIGURATION
const app = express();

// MIDDLEWARE
app.use(cors());
app.use(express.json()); // Parse incoming JSON
app.use("/products", productController)
app.use("/cart", cartController)

// ROUTES
app.get("/", (req, res) => {
  res.send("Hello, world!");
});


// EXPORT
module.exports = app;
