const { gql } = require('apollo-server-express'),

// typrDefs are similar to schemas

const typeDefs = gql`
type Class {
    _id: ID
    userName: String
    therapist: String
}

type Query {
    classes: [class]
}

`;

module.exports = {typeDefs};