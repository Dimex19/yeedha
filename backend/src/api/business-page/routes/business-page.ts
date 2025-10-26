/**
 * business-page router
 */

import { factories } from '@strapi/strapi';

export default factories.createCoreRouter('api::business-page.business-page', {
    config: {
        find: {
            middlewares: ["api::business-page.business-page-populate"]
        }
    }
});
