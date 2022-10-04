const { gql } = require('apollo-server-express');

module.exports = gql`
scalar DateTime
 type Note {
 id: ID!
 content: String!
 author: String!
 disabled: Boolean!
 createdAt: DateTime!
 updatedAt: DateTime!
 }
 type Query {
 notes: [Note!]!
 note(id: ID!): Note!
 }
 type Mutation {
 newNote(content: String!, author: String!): Note!
 deleteNote(id: ID!): Boolean
 updateNote(id: ID!): Note!
 }
`;
