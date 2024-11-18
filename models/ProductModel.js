const { Schema, model } = require('../connection');

const mySchema = new Schema({
    title: String,
    price: Number,
    brand: String,
    color: String,
    createdAt: { type: Date, default: Date.now }
});

module.exports = model('products', mySchema);