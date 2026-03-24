/**
 * health-insurance-form controller
 */

// import { factories } from '@strapi/strapi'

// export default factories.createCoreController('api::health-insurance-form.health-insurance-form');

'use strict';

module.exports = {
  async healthInsurance(ctx) {
    try {
      const { fullName, phoneNumber, driverId, email, driving2Months, registeredAssociation, healthInsurance, medicalConditions, acceptedTerms } = ctx.request.body.data;
      console.log("BODY:", ctx.request.body);
      if (!fullName || !phoneNumber || !driverId || !driving2Months || !registeredAssociation || !healthInsurance ||  !acceptedTerms) {
        return ctx.badRequest("All fields are required");
      }
      
      const entry = await strapi.entityService.create("api::health-insurance-form.health-insurance-form", {
        data: {
          fullName,
          phoneNumber,
          driverId,
          email,
          driving2Months,
          registeredAssociation,
          healthInsurance,
          medicalConditions,
          acceptedTerms
        },
      });

      return entry;
    } catch (err) {
      return ctx.internalServerError(err);
    }
  }
};