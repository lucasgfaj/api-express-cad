const port = 3003;

const express = require('express');
const app = express ();
const bodyParser = require('body-parser');
const database = require('./database');

// app.get('/product', (req, res, next) => {
//     console.log('Middleware 1...');
//     next();
// });

// app.get('/product', (req, res, next) => {
//      res.send({ name: 'Notebook', price: 123.45 }); //Convert to JSON
// });

app.use(bodyParser.urlencoded({ extended: true }));


//View Product by Get
app.get('/products', (req, res, next) => {
    res.send(database.getProducts())
})

//Get Product by Id
app.get('/products/:id', (req, res, next) => {
    res.send(database.getProduct(req.params.id))
})


// Create Product
app.post('/products', (req, res, next) => {
    const product = database.saveProduct({
        name: req.body.name,
        price: req.body.price
    })
    res.send(product) // Generate JSON
})

//Update Product
app.put('/products/:id', (req, res, next) => {
    const product = database.saveProduct({
        id: req.params.id,
        name: req.body.name,
        price: req.body.price
    })
    res.send(product) // Generate JSON
})


// Delete Product
app.delete('/products/:id', (req, res, next) => {
    const product = database.deleteProduct(req.params.id)
    res.send(product) // Generate JSON
})



app.listen(port, () => {
    console.log(`Server is Running on ${port}.`)
})