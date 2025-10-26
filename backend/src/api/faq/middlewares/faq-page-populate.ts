/**
 * `faq-page-populate` middleware
 */

import type { Core } from '@strapi/strapi';

const populate = {
  blocks: {
    on: {
      "faq.options2": {
        populate: {
          options: {
            populate: "*"
          }
        }
      },
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
    strapi.log.info('In faq-page-populate middleware.');
    ctx.query.populate = populate;
    await next();
  };
};
