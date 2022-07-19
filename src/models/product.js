const mongoose = require('mongoose');

// product = id, sku, nombre, descripción, precio.
const productSchema = mongoose.Schema({
    sku:{
        type: String,
        required: true
    },
    nombre:{
        type: String,
        required: true
    },
    descripcion:{
        type: String,
        required: true
    },
    precio:{
        type: Number,
        required: true
    }
});

module.exports = mongoose.model('Product', productSchema);