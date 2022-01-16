const { gql } = require('apollo-server-express'),

// typeDefs define what will be inlcuded in the graph

const typeDefs = gql`
type User {
    _id: ID!
    userName: String
    dateOfBirth: String
    journals: [Journal]
    therapist: String
}

type Journal {
    title: String
    dateCreated: String
    howAreYou:String
    author: User

}
type Auth{
token:ID!
user: User

}
input JournalInput {
    title: String
    dateCreated: String
    howAreYou: String
    author: User



}


type Query {
    getUser: User
}

type Mutation {
    login(userName:String!, password:String): Auth

    signin(firstName:String, lastName:String, email:String, password:String, therapist:String): Auth

    createJournal(journalData:JournalInput!): Journal
}


`;

module.exports = {typeDefs};