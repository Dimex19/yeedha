/**
 * `business-page-populate` middleware
 */

import type { Core } from '@strapi/strapi';

const populate = {
    blocks: {
      on: {
        "business.hero": {
          populate: {
            cta: true,

            }
        },
        "business.benefit": {
          populate: {
            optionPlusImage: {
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
            imageTitleDesc: {
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
            }
          }
        },
        "business.how-yeedha-works": {
          populate: {
            image: {
              populate: {
                image: {
                  fields: ["alternativeText", "url"]
                }
              }
            },
            cta: true,
            titleDesc : true
          }
        },
        "business.yeedha-advantage": {
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
        "homepage.download-section": {
          populate: {
            apps: {
              populate: {
                downloadLinks: true,
                images: {
                  populate: {
                    image: {
                      fields: ["alternativeText", "url"]
                    }
                  }
                }
              }
            },
            backgroundImage: true
          }
        },
      }
    }
  }

export default (config, { strapi }: { strapi: Core.Strapi }) => {
  // Add your own logic here.
  return async (ctx, next) => {
    strapi.log.info('In business-page-populate middleware.');
    ctx.query.populate = populate;
    await next();
  };
};
