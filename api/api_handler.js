/* eslint linebreak-style: ["error", "windows"] */
const fs = require('fs');
require('dotenv').config();
const { ApolloServer } = require('apollo-server-express');

const product = require('./product.js');

const resolvers = {
    Query: {
      productList: product.list,
      product: product.get,
    },
    Mutation: {
      addProduct:product.add,
      updateProduct: product.update,
    },
};

const server = new ApolloServer({
    typeDefs: fs.readFileSync('schema.graphql', 'utf-8'),
    resolvers,
    formatError: (error) => {
        console.log(error);
        return error;
    },
});

function installHandler(app) {
    const enableCors = (process.env.ENABLE_CORS || 'true') === 'true';
    console.log('CORS setting:', enableCors);
    server.applyMiddleware({ app, path: '/graphql', cors: enableCors });
}
  
module.exports = { installHandler };