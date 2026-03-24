/**
 * health-insurance-form router
 */

// import { factories } from '@strapi/strapi';

// export default factories.createCoreRouter('api::health-insurance-form.health-insurance-form');

module.exports = {
  routes: [
    {
      method: "POST",
      path: "/health-insurance-forms",
      handler: "health-insurance-form.healthInsurance",
      config: {
        policies: [],
      },
    },
  ],
};