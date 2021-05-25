import express from 'express';
import data from './data';
const app = express();
app.get("/api/products/popular/:id", (req, res) => {
    const productId = req.params.id;
    const product = data.products.find(product => product.popular.some(x => x._id === productId));

    if (product)
        res.send(product);
    else
        res.status(404).send({ msg: "product not found" })
});
app.get("/api/products/popular", (req, res) => {
    res.send(data.products);
});



app.listen(9000, () => {
    console.log("Srvr started at http://localhost:9000")

});
