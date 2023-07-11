import { ApolloServer } from "apollo-server";
import mongoose from "mongoose";
import typeDefs from "./data/typeDefs.js";
import resolvers from "./data/resolvers.js";
import dotenv from "dotenv";

dotenv.config();

const MONGODB = process.env.MONGO_URI
const port = process.env.PORT

const server = new ApolloServer({
    typeDefs,
    resolvers
})

mongoose.connect(MONGODB, {useNewUrlParser: true})
    .then(() => {
        console.log("MongoDB Connect Successfully");
        return server.listen({port})
    })
    .then((res) => {
        console.log(`Server listening on ${res.url}`)
    })