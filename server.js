const express = require('express')

// File system definition
const fs = require('fs')

// Defining the ApolloServer::
const {ApolloServer} = require('apollo-server-express')


//Creating an express application
const app = express()


//Defining about message: String
let aboutMessage = "Issue Tracker API v1.0";


// Defining the function that we will use to return the issuelist 
const issuesDB = [{
        id: 1,
        status: 'New',
        owner: 'Ravan',
        effort: 5,
        created: new Date('2019-01-15'),
        due: undefined,
        title: 'Error in console when clicking Add',
    },
    {
        id: 2,
        status: 'Assigned',
        owner: 'Eddie',
        effort: 14,
        created: new Date('2019-01-16'),
        due: new Date('2019-02-01'),
        title: 'Missing bottom border on panel',
    },
];

//Setting aboutMessage function,
function setAboutMessage(_, { message}) {
    return aboutMessage = message;
}


// return the issueDB.
function issueList() {
    return issuesDB;
}

// Defining the resolvers 
const resolvers = {
    Query: {
        about: () => aboutMessage,
        issueList,
    },
    Mutation: {
        setAboutMessage,
    },
}

//Schema for graphql
const typeDefs = `
    type Query{
        about : String!
    }
    type Mutation{
        setAboutMessage(message: String!): String
    }
`;


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

server.applyMiddleware({app, path: '/graphql'})

//Listening to for request
app.listen(3000, () => {
    console.log('App started on port 3000');
})
