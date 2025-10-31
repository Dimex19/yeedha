/**
 * `landing-page-populate` middleware
 */

import type { Core } from '@strapi/strapi';

const populate = {
    blocks: {
      on: {
        "homepage.hero": {
          populate: {
            cta: true,
            heroVideo: true
            }
        },
        "homepage.do-more-section": {
          populate: {
            actions: {
              populate: {
                cta: true,
                backgroundImage: {
                  populate: "*",
                }
              }
            }
          }
        },
        "homepage.about-section": {
          populate: {
            cta: true,
            images: {
              populate: {
                image: {
                  fields: ["alternativeText", "url"]
                }
              }
            }
          }
        },
        "homepage.ride-and-earn": {
          populate: {
            rideAndEarnSubsection: {
              populate: {
                info: {
                  populate: {
                    cta: true
                  }
                },
                image: {
                  populate: "*"
                },
                cta: true
              }
            }
          }
        },
        "homepage.extra-section": {
          populate: {
            infoPlusImage: {
              populate: {
                image: {
                  populate: "*"
                },
              }
            }
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
    strapi.log.info('In landing-page-populate middleware.');
    ctx.query.populate = populate;
    await next();
  };
};
