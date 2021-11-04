module.exports = {
  //
  graphql: {
    endpoint: '/graphql',
    shadowCRUD: true,
    playgroundAlways: true,
    playground: true,
    depthLimit: 7,
    amountLimit: 100,
    apolloServer: {
      tracing: false,
    },
  },
};