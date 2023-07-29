import { ApolloServer } from "@apollo/server";
//import { ApolloServer} from 'apollo-server';
import { startStandaloneServer } from "@apollo/server/standalone";
import express from 'express'

const app=express();

import typeDefs from "./schema.js"; //all schema called here


//const resolvers = [UserResolver, CategoryResolver, ItemResolver,ShopResolver];

import resolvers from './resolvers.js'; //all combined resolver called here

const server = new ApolloServer({ typeDefs, resolvers });

const { url } = await startStandaloneServer(server); //for runnig grqphql server locally

// Start the server
//server.listen().then(({ url }) => {
//  console.log(`Server ready at ${url}`);
//});
console.log(` 🚀 Server ready at ${url}`);
