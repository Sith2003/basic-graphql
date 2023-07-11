import { gql } from "apollo-server";

const typeDefs = gql`
    type User {
        name: String,
        lastname: String,
        description: String
        createdAt: String
    }

    input UserInput {
        name: String,
        lastname: String,
        description: String
    }

    type Query {
        user(ID: ID!): User  
        getUsers(amount: Int): [User]   
    }

    type Mutation {
        createUser(userInput: UserInput): User!
        deletedUser(ID: ID!): Boolean
        editedUser(ID: ID!, userInput: UserInput): Boolean
    }
`

export default typeDefs;