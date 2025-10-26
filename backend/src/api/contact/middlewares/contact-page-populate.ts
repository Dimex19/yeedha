/**
 * `contact-page-populate` middleware
 */

import type { Core } from '@strapi/strapi';

const populate = {
  blocks: {
    on: {
      "contact.form": {
        populate: {
          options: true,
          cta: true,
          image: {
            populate: {
              image: {
                fields: ["alternativeText", "url"]
              }
            }
      
          }
        }
      },
      "contact.talk-to-us": true,
      "homepage.start-and-newsletter": {
        populate: {
          newsletterSubsection: true,
          startSubsection: {
            populate: {
              getStarted: {
                populate: {
                  cta: true,
                  backgroundImage: true
                }
              },
            }
          },
        }
      }
    }
  }
}

export default (config, { strapi }: { strapi: Core.Strapi }) => {
  // Add your own logic here.
  return async (ctx, next) => {
    strapi.log.info('In contact-page-populate middleware.');
    ctx.query.populate = populate
    await next();
  };
};
