const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');

const port = process.env.PORT || 4000;
// Left empty on purpose
let notes = [
    { id: '1', content: 'This is a note', author: 'Adam Scott' },
    { id: '2', content: 'This is another note', author: 'Harlow Everly' },
    { id: '3', content: 'Oh hey look, another note!', author: 'Riley Harrison' }
];

const typeDefs = gql`
  type Note {
    id: ID
    content: String
    author: String
    disabled: Boolean
  }
  type Query {
    hello: String
    notes: [Note]
    note(id: ID): Note
  }
  type Mutation {
    newNote(content: String!, author: String!): Note
    deleteNote(id: ID): Boolean
  }
`;

const resolvers = {
    Query: {
        hello: () => 'Hello world!',
        notes: () => notes,
        note: (parent, args) => {
            return notes.find(note => note.id === args.id);
        }
    },
    Mutation: {
        newNote: (parent, args) => {
            let noteValue = {
                id: String(notes.length + 1),
                content: args.content,
                author: args.author,
                disabled: false
            };
            notes.push(noteValue);
            return noteValue;
        },
        deleteNote: (parent, args) => {
            console.log(args.id)
            notes = notes.filter(item => item.id !== args.id)
            return !notes.includes(args.id)
        }
    }
};

const app = express();

const server = new ApolloServer({ typeDefs, resolvers });
server.applyMiddleware({ app, path: '/api' });

app.listen({ port }, () =>
    console.log(
        `GraphQL Server running at http://localhost:${port}${server.graphqlPath}`
    )
);