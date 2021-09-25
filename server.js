const express = require('express')
const fs =  require('fs')
const {ApolloServer} = require('apollo-server-express')

//Creating an express application
const app = express()


//Defining about message: String
let aboutMessage = "Issue Tracker API v1.0";


//Schema for graphql
const typeDefs =`
    type Query{
        about : String!
    }
    type Mutation{
        setAboutMessage(message: String!): String
    }
`;
//Setting aboutMessage function,
function setAboutMessage(_,{message}){
    return aboutMessage = message;
}

// Defining the resolvers 
const resolvers = {
    Query : {
        about : () => aboutMessage,
    },
    Mutation: {
        setAboutMessage,
    },
}

//creating the graphql server
const server = new ApolloServer({
    typeDefs: fs.readFileSync('./server/schema.graphql', 'utf8'),
    resolvers,
})

//Creating a middleware 
const fileServerMidleware = express.static('public');
// Applying the middleware
app.use(fileServerMidleware);

//Applying the middleware for the server,

server.applyMiddleware({app,path: '/graphql'})

//Listening to for request
app.listen(3000,() => {
    console.log('App started on port 3000');
})