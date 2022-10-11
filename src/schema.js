const { gql } = require('apollo-server-express');

module.exports = gql`
    scalar DateTime
    type Note {
    id: ID!
    content: String!
    author: User!
    disabled: Boolean!
    createdAt: DateTime!
    updatedAt: DateTime!
    favoriteCount: Int!
    favoritedBy: [User!]
    }
    type User {
    id: ID!
    username: String!
    email: String!
    avatar: String
    notes: [Note!]!
    favorites: [Note!]!
    }
    type NoteFeed {
    notes: [Note]!
    cursor: String!
    hasNextPage: Boolean!
    }
    type Query {
    notes: [Note!]!
    note(id: ID): Note!
    user(username: String!): User
    users: [User!]!
    me: User!
    favoriteCount: Int!
    favoritedBy: [User!]
    noteFeed(cursor: String): NoteFeed
    }
    type Mutation {
    newNote(content: String!): Note
    updateNote(id: ID!, content: String!): Note!
    deleteNote(id: ID!): Boolean!
    disableNote(id: ID!): Boolean!
    enableNote(id: ID!): Boolean!
    toggleFavorite(id: ID!): Note!
    signUp(username: String!, email: String!, password: String!): String!
    signIn(username: String, email: String, password: String!): String!
    }
`;

