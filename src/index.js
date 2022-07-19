
const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const productRoutes = require('./routes/product')

const port = process.env.PORT || 9000;
const app = express();

// middleware
app.use(express.json());
app.use('/products', productRoutes);


//routes
app.get('/', (req, res)=>{
    res.send('Bienvenido a mi API')
});

// Mongodb connection
mongoose
    .connect(process.env.MONGODB_URI)
    .then(()=> console.log('conectado a Mongodb Atlas'))
    .catch((error)=> console.error(error));

app.listen(port, () => console.log('server escuchando por el puerto',port));