const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');

const cartSchema = new mongoose.Schema({
    id: String,
    products: [
        {
            product: String,
            quantity: Number
        }
    ]
});

// Aplica el plugin de paginación al esquema
cartSchema.plugin(mongoosePaginate);

const Cart = mongoose.model('Cart', cartSchema);

module.exports = Cart;