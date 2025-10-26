/**
 * `cng-conversion-page-populate` middleware
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
      "health-insurance.how-it-works": {
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
      "shared.faq": {
        populate: {
          questions: true,
          CallToAction: {
            populate: {
              image: {
                populate: {
                  image: {
                    fields: ["alternativeText", "url"]
                  }
                }
              },
              cta: true
            }
          },
        }
      },
      "health-insurance.car-ready": {
        populate: {
          iconTitleList: {
            populate: {
              icon: {
                populate: {
                  image: {
                    fields: ["alternativeText", "url"]
                  }
                }
              },
              itemsList: true
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
    strapi.log.info('In cng-conversion-page-populate middleware.');
    ctx.query.populate = populate
    await next();
  };
};
