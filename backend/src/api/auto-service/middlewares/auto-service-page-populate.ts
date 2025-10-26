/**
 * `auto-service-page-populate` middleware
 */

import type { Core } from '@strapi/strapi';

const populate = {
  blocks: {
    on: {
      "health-insurance.hero": {
        populate: {
          cta: true,
          image: {
            populate: {
              image: {
                fields: ["alternativeText", "url"]
              }
            }
          },
          partners: {
            populate: {
              image: {
                fields: ["alternativeText", "url"]
              }
            }
          }
        }
      },
      "health-insurance.yeedha-health-coverage": {
        populate: {
          cardWithIcon: {
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
      },
      "auto-service.how-it-works": {
        populate: {
          cards: {
            populate: {
              icon: {
                populate: {
                  image: {
                    fields: ["alternativeText", "url"]
                  }
                }
              },
              titleDesc: true
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
    strapi.log.info('In auto-service-page-populate middleware.');
    ctx.query.populate = populate
    await next();
  };
};
