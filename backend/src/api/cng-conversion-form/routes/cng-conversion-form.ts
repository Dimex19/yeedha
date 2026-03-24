/**
 * cng-conversion-form router
 */

// import { factories } from '@strapi/strapi';

// export default factories.createCoreRouter('api::cng-conversion-form.cng-conversion-form');

module.exports = {
  routes: [
    {
      method: "POST",
      path: "/cng-conversion-forms",
      handler: "cng-conversion-form.CNGConversion",
      config: {
        policies: [],
      },
    },
  ],
};