const bodyParser = require("body-parser");
const cors = require("cors");
const express = require("express");
const port = process.env.PORT || 4000;
const app = express();

// Register Express middlewares
app.use(bodyParser.json(), cors());

// Setting up GraphQL
const { ApolloServer, gql } = require("apollo-server-express");

// 1. Construct a schema, using GraphQL schema language
const typeDefs = gql`
  type Query {
    hello: String
  }
`;

// 2. Provide resolver functions for your schema fields
const resolvers = {
  Query: {
    hello: () => "Hello GraphQL world!",
  },
};

// 3. Initialize the ApolloExpressServer
const server = new ApolloServer({ typeDefs, resolvers });

server.start().then((res) => {
  server.applyMiddleware({ app });

  // Already present app.listen()
  app.listen({ port }, () => {
    console.log(`Default ApolloGQL server path ${server.graphqlPath}`);
    console.log(
      `🚀 Server ready at http://localhost:4000${server.graphqlPath}`
    );
  });
});
