/**
 * subscriber controller
 */

// import { factories } from '@strapi/strapi'

// export default factories.createCoreController('api::subscriber.subscriber');

'use strict';

module.exports = {
  async subscribe(ctx) {
    try {
      const { email } = ctx.request.body;

      if (!email) {
        return ctx.badRequest("Email is required");
      }

      const entry = await strapi.entityService.create("api::subscriber.subscriber", {
        data: {
          email,
          subscribedAt: new Date(),
        },
      });

      return entry;
    } catch (err) {
      return ctx.internalServerError(err);
    }
  }
};

