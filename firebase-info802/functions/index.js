const admin = require("firebase-admin");
const functions = require("firebase-functions");
const express = require("express");

admin.initializeApp();

const { ApolloServer, gql } = require("apollo-server-express");

const typeDefs = gql`
  type Product {
    name: String!,
    description: String!,
    price: Float!,
    weight: Float!,
    distance: Float!
  }
  type Query {
    products: [Product]
  }
`;

const resolvers = {
    Query: {
        products: () =>
            admin
                .database()
                .ref("products")
                .once("value")
                .then(snap => snap.val())
                .then(val => Object.keys(val).map(key => val[key]))
    }
};

const app = express();
const server = new ApolloServer({ typeDefs, resolvers });
server.applyMiddleware({ app, path: "/", cors: true });

exports.graphql = functions.https.onRequest(app);