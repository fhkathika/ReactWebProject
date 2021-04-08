import express from 'express';
import data from './data';
const app= express();
app.get("/api/products/popular/recommended/allmenu",(req,res) => {
    res.send(data.products);
});



app.listen(9000, () => {
    console.log("Srvr started at http://localhost:9000")
  
});
