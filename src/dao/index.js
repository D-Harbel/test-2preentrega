const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');

mongoose.connect('mongodb+srv://I_Ulloa:Coderclave@ecommerce.6tv4mer.mongodb.net/?retryWrites=true&w=majority');

// Importa tus modelos
const Cart = require('./models/cartModel');
const Message = require('./models/messageModel');
const Product = require('./models/productModel');

// Configura mongoosePaginate (si es necesario)
mongoosePaginate.paginate.options = {
    page: 'page',
    limit: 'limit',
    customLabels: {
        totalDocs: 'totalItems',
        docs: 'payload',
        page: 'page',
        nextPage: 'nextPage',
        prevPage: 'prevPage',
        totalPages: 'totalPages',
        hasPrevPage: 'hasPrevPage',
        hasNextPage: 'hasNextPage',
        prevLink: 'prevLink',
        nextLink: 'nextLink',
    },
};

// No necesitas aplicar el plugin de paginación aquí

// Exporta tus modelos
module.exports = {
    Cart,
    Message,
    Product
};