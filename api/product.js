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

async function update(_, { id, changes }) {
  const db = getDb();
  if (changes.name || changes.category || changes.imageurl) {
    const product = await db.collection('products').findOne({ id });
    Object.assign(product, changes);
  }
  await db.collection('products').updateOne({ id }, { $set: changes });
  const savedProduct = await db.collection('products').findOne({ id });
  return savedProduct;
}

module.exports = { list, add, get, update };