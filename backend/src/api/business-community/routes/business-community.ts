/**
 * business-community router
 */

// import { factories } from '@strapi/strapi';

// export default factories.createCoreRouter('api::business-community.business-community');

module.exports = {
  routes: [
    {
      method: "POST",
      path: "/business-community",
      handler: "business-community.join",
      config: { policies: [] },
    },
  ],
};
