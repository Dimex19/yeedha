/**
 * contact-us-form router
 */

// import { factories } from '@strapi/strapi';

// export default factories.createCoreRouter('api::contact-us-form.contact-us-form');
module.exports = {
  routes: [
    {
      method: "POST",
      path: "/contact-us-forms",
      handler: "contact-us-form.contactUs",
      config: {
        policies: [],
      },
    },
  ],
};