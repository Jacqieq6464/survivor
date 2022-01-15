const { gql } = require('apollo-server-express'),

// typeDefs are similar to schemas

const typeDefs = gql`
type Class {
    _id: ID
    author: author
    therapist: String
    title of Journal: String
}

type Journal {
    title: String
    dateCreated: Int
    emotions: []
    author: journals [journal]

}


type Query {
    classes: [class]
}

type Query {
    journal date: [dates]!
    Journal (id: ID!): Journal
    me: User


}



`;

module.exports = {typeDefs};