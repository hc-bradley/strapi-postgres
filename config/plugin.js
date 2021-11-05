module.exports = {
  //
  graphql: {
    endpoint: '/graphql',
    shadowCRUD: true,
    playgroundAlways: true,
    depthLimit: 7,
    amountLimit: 100,
    apolloServer: {
      tracing: false,
      playground: true,
      playgroundAlways: true,
    },
     cors: {
        credentials: true,
        origin: (origin, callback) => {
            const whitelist = [
                "http://site1.com",
                "https://site2.com"
            ];

            if (whitelist.indexOf(origin) !== -1) {
                callback(null, true)
            } else {
                callback(new Error("Not allowed by CORS"))
            }
        }
  },
}
};