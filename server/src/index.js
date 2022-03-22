const { ApolloServer } = require("apollo-server");
const typeDefs = require("./schema");
const resolvers = require("./resolvers");
const TrackAPI = require("./datasources/track-api");

const server = new ApolloServer(
  { typeDefs,
    resolvers,
    dataSources: () => {
      return {
        trackApi: new TrackAPI()
      }
    }}
  );

server.listen().then(({ url }) => {
  console.log(`Server started at ${url}`);
});
