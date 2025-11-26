/**
 * driver-community controller
 */

// import { factories } from '@strapi/strapi'

// export default factories.createCoreController('api::driver-community.driver-community');

'use strict';

module.exports = {
  async join(ctx) {
    try {
      const { driverType, phoneNumber } = ctx.request.body;

      if (!driverType || !phoneNumber) {
        return ctx.badRequest("driverType and phoneNumber are required");
      }

      const entry = await strapi.entityService.create("api::driver-community.driver-community", {
        data: {
          driverType,
          phoneNumber,
          joinedAt: new Date(),
        },
      });

      return entry;
    } catch (err) {
      return ctx.internalServerError(err);
    }
  },
};
