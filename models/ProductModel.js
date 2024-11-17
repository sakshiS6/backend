const { Schema, model } = require('../connection');

const mySchema = new Schema({
    productName: String,
    price: { type: BigInt, required: true },
    brand: { type: String, unique: true },
    color: {type:String, default:'Unknown'},
    createdAt: { type: Date, default: Date.now }
});

module.exports = model('users', mySchema);