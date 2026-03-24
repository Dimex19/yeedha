/**
 * cng-conversion-form controller
 */

// import { factories } from '@strapi/strapi'

// export default factories.createCoreController('api::cng-conversion-form.cng-conversion-form');

'use strict';

module.exports = {
  async CNGConversion(ctx) {
    try {
      const { fullName, phoneNumber, driverID, email, vehicleMake, location, model, modelYear, fuelType, yearsOfDriving, acceptedTerms } = ctx.request.body.data;
      console.log("BODY:", ctx.request.body);
      if (!fullName || !phoneNumber || !email || !vehicleMake || !location || !model || !modelYear || !fuelType || !yearsOfDriving || !acceptedTerms) {
        return ctx.badRequest("All fields are required");
      }
      
      const entry = await strapi.entityService.create("api::cng-conversion-form.cng-conversion-form", {
        data: {
          fullName,
          phoneNumber,
          driverID,
          email,
          vehicleMake,
          location,
          model,
          modelYear,
          fuelType,
          yearsOfDriving,
          acceptedTerms
        },
      });

      return entry;
    } catch (err) {
      return ctx.internalServerError(err);
    }
  }
};