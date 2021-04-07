/* eslint linebreak-style: ["error", "windows"] */
const { getDb, getNextSequence } = require('./db.js');

async function list() {
    const db = getDb();
    const products = await db.collection('products').find({}).toArray();
    return products;
}

async function get(_, { id }) {
  const db = getDb();
  const product = await db.collection('products').findOne({ id });
  return product;
}

async function add(_, { product }) {
    const db = getDb();
    const newProduct = Object.assign({}, product);
    newProduct.id = await getNextSequence('products');
    const result = await db.collection('products').insertOne(newProduct);
    const savedProduct = await db.collection('products')
      .findOne({ _id: result.insertedId });
    return savedProduct;
}

module.exports = { list, add, get };