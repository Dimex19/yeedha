/**
 * `about-page-populate` middleware
 */

import type { Core } from '@strapi/strapi';

const populate = {
  blocks: {
    on: {
      "shared.quote": {
        populate: {
          card: {
            populate: {
            cta: true
            }
          }
        }
      },
      "about.empower": {
        populate: {
          image: {
            populate: {
              image: {
                fields: ["alternativeText", "url"]
              }
            }
          }
        }
      },
      "about.mission-x-vision": {
        populate: {
          images: {
            populate: {
              image: {
                fields: ["alternativeText", "url"]
              }
            }
          }
        }
      },
      "shared.cards-with-icon": {
        populate: {
          cardWithIcon : {
            populate: {
            icon: {
              populate: {
                image: {
                  fields: ["alternativeText", "url"]
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}

export default (config, { strapi }: { strapi: Core.Strapi }) => {
  // Add your own logic here.
  return async (ctx, next) => {
    strapi.log.info('In about-page-populate middleware.');
    ctx.query.populate = populate
    await next();
  };
};
