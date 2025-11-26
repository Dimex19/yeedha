/**
 * business-community controller
 */

// import { factories } from '@strapi/strapi'

// export default factories.createCoreController('api::business-community.business-community');

'use strict';

module.exports = {
  async join(ctx) {
    try {
      const { businessType, phoneNumber } = ctx.request.body;

      if (!businessType || !phoneNumber) {
        return ctx.badRequest("businessType and phoneNumber are required");
      }

      const entry = await strapi.entityService.create(
        "api::business-community.business-community",
        {
          data: {
            businessType,
            phoneNumber,
            joinedAt: new Date(),
          },
        }
      );

      return entry;
    } catch (err) {
      return ctx.internalServerError(err);
    }
  },
};
