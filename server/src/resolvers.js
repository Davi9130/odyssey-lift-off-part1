const resolvers = {
  Query: {
    tracksForHome: (_, __, { dataSources }) => {
      return dataSources.trackApi.getTracksForHome();
    },
    track: (_, { id }, { dataSources }) => {
      return dataSources.trackApi.getTrack(id);
    },
    module: (_, { id }, { dataSources }) => {
      return dataSources.trackApi.getModule(id);
    },
  },
  Mutation: {
    incrementTrackViews: async (_, { id }, { dataSources }) => {
      try {
        const track = await dataSources.trackApi.incrementTrackViews(id);
        return {
          code: 200,
          success: true,
          message: `Increment ok, track id ${id}`,
          track,
        };
      } catch (err) {
        return {
          code: err.extensions.response.status,
          success: false,
          message: err.extensions.response.body,
          track: null,
        };
      }
    },
  },
  Track: {
    author: ({ authorId }, _, { dataSources }) => {
      return dataSources.trackApi.getAuthor(authorId);
    },
    modules: ({ id }, _, { dataSources }) => {
      return dataSources.trackApi.getTrackModules(id);
    },
  },
};

module.exports = resolvers;
