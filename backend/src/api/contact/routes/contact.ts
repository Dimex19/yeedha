/**
 * contact router
 */

import { factories } from '@strapi/strapi';

export default factories.createCoreRouter('api::contact.contact', {
    config: {
        find: {
            middlewares: ["api::contact.contact-page-populate"]
        }
    }
});
