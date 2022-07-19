const express = require('express');
const productSchema = require('../models/product');

const router = express.Router();

//Create Product
router.post('/create', (req, res)=> {
    const product = productSchema(req.body);
    product
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error}));
});

//Get all products
router.get('/findall', (req, res)=> {
    productSchema
        .find()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error}));
});

//Get a product
router.get('/find/:id', (req, res)=> {
    const { id } = req.params;
    productSchema
        .findById(id)
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error}));
});

//Update a product
router.put('/update/:id', (req, res)=> {
    const { id } = req.params;
    const { sku, nombre, descripcion, precio} = req.body;
    productSchema
        .updateOne({_id: id}, {$set: {sku, nombre, descripcion, precio}})
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error}));
});

//delete a product
router.delete('/delete/:id', (req, res)=> {
    const { id } = req.params;
    productSchema
        .remove({_id: id})
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error}));
});

module.exports = router;
