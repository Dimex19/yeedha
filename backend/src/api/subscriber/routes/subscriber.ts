/**
 * subscriber router
 */

// import { factories } from '@strapi/strapi';

// export default factories.createCoreRouter('api::subscriber.subscriber');
module.exports = {
  routes: [
    {
      method: "POST",
      path: "/subscribers",
      handler: "subscriber.subscribe",
      config: {
        policies: [],
      },
    },
  ],
};
