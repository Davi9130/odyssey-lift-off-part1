const { gql } = require("apollo-server");

const typeDefs = gql`
  type Query {
    tracksForHome: [Track!]!
    track(id: ID!): Track
    module(id: ID!): Module!
  }

  type Mutation {
    incrementTrackViews(id: ID!): IncrementTrackViewsResponse!
  }

  type IncrementTrackViewsResponse {
    code: Int!
    success: Boolean!
    message: String!
    track: Track
  }

  type Track {
    id: ID!
    title: String!
    author: Author!
    thumbnail: String
    length: Int
    modulesCount: Int
    description: String
    numberOfViews: Int
    modules: [Module!]!
  }

  type Module {
    id: ID!
    title: String!
    length: Int
    content: String
    videoUrl: String
  }

  type Author {
    id: ID!
    name: String!
    photo: String
  }
`;

module.exports = typeDefs;
