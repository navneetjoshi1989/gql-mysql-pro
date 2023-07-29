import { ApolloServer } from "@apollo/server";
//import { ApolloServer} from 'apollo-server';
import { expressMiddleware } from '@apollo/server/express4'
import { startStandaloneServer } from "@apollo/server/standalone";
import express from 'express'

const app=express();
const PORT = Number(process.eventNames.PORT) || 8000 ;
app.use(express.json());
app.get("/",(req,res)=>{
    res.json({message:"server is running smoothly"});
})
import typeDefs from "./schema.js"; //all schema called here
import resolvers from './resolvers.js'; //all combined resolver called here
const server = new ApolloServer({ typeDefs, resolvers });
await server.start();
app.use("/graphql",expressMiddleware(server))

app.listen(PORT,()=>{
    console.log( ` 🚀 Server ready at http://localhost:${PORT}`);
 })
 