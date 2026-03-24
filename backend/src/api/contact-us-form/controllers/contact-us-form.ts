/**
 * contact-us-form controller
 */

// import { factories } from '@strapi/strapi'

// export default factories.createCoreController('api::contact-us-form.contact-us-form');

'use strict';

module.exports = {
  async contactUs(ctx) {
    try {
      const { userType, fullName, phoneNumber, message } = ctx.request.body.data;
      console.log("BODY:", ctx.request.body);
      if (!userType || !fullName || !phoneNumber || !message) {
        return ctx.badRequest("All fields are required");
      }
      
      const entry = await strapi.entityService.create("api::contact-us-form.contact-us-form", {
        data: {
          userType,
          fullName,
          phoneNumber,
          message,
        },
      });

      return entry;
    } catch (err) {
      return ctx.internalServerError(err);
    }
  }
};