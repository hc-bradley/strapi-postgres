
const index = 'post';


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
                "http://concord-strapi.onrender.com",
                "https://concord-strapi.onrender.com"
            ];

            if (whitelist.indexOf(origin) !== -1) {
                callback(null, true)
            } else {
                callback(new Error("Not allowed by CORS"))
            }
        }
  },
},
lifecycles: {
    afterCreate(result, data) {
      strapi.services.algolia.saveObject(result, index);
    },
    afterUpdate(result, params, data) {
      strapi.services.algolia.saveObject(result, index);
    },
    afterDelete(result, params) {
      strapi.services.algolia.deleteObject(result.id, index);
    },
  },
};
