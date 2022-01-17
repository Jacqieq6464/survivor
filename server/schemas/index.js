const typeDefs = require('./typeDefs');
const resolvers = require('./resolvers');
// is the command in the correct place here or should it be in the src/index.js?
const server = new ApolloServer({ typeDefs });


module.exports = {typeDefs, resolvers};