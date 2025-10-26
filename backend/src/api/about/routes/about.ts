/**
 * about router.
 */

import { factories } from '@strapi/strapi';

export default factories.createCoreRouter('api::about.about', {
    config: {
        find: {
            middlewares: ["api::about.about-page-populate"]
        }
    }
});
