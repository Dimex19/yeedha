/**
 * driver-community router
 */

// import { factories } from '@strapi/strapi';

// export default factories.createCoreRouter('api::driver-community.driver-community');

module.exports = {
  routes: [
    {
      method: "POST",
      path: "/driver-community",
      handler: "driver-community.join",
      config: { policies: [] },
    },
  ],
};
