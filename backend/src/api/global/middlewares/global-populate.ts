/**
 * `global-populate` middleware
 */

import type { Core } from '@strapi/strapi';

const populate = {
    header: {
      populate: {
        links: true,
        logo: true,
        cta: true
      }
    },
    footer: {
      populate: {
        quickLinks: true,
        newsLinks: true,
        productsLinks : true,
        logo: true,
        socialIcons: true,
        downloadStore: true,
      }
    },
    startAndNewsletter: {
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

export default (config, { strapi }: { strapi: Core.Strapi }) => {
  // Add your own logic here.
  return async (ctx, next) => {
    console.dir(ctx.query, { depth: null });
    ctx.query.populate = populate;
    strapi.log.info('In global-populate middleware.');

    await next();
  };
};
