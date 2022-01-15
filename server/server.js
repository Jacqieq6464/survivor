const express = require('express');
const { ApolloServer} = require ('apollo-server-express');
const path = require('path');
const graphql = require('qraphql');


// const dotenv = require('dotenv')
// const morgan = require('morgan')

const { typeDefs, resolvers } =require('./config/schemas');
const db = require ('./config/db');


const PORT = process.env.PORT || 3001;

const app = express();
const server = new ApolloServer({
    typeDefs,
    resolvers

});

server.applyMiddleware({ app });

app.use(express.urlencoded({ extended : false}));
app.use(express.json());

if (process.env.NODE_ENV === 'production'){
    app.use(express.static(path.join(__dirname, '..public/build')));
}
app.get('*', (req, res) => {
res.sendFile(path.join (__dirname, '../public/build/index.html'));

});

db.once('open', () => {
    app.listen(PORT, () =>{
        console.log (`API server running on port ${PORT}!`);
        console.log (`use Graphql at http://localhost:${PORT}${server.graphqlPath}`);

        
    })
})

