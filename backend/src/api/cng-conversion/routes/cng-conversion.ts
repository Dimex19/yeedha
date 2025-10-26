/**
 * cng-conversion router
 */

import { factories } from '@strapi/strapi';

export default factories.createCoreRouter('api::cng-conversion.cng-conversion', {
    config: {
        find: {
            middlewares: ["api::cng-conversion.cng-conversion-page-populate"]
        }
    }
});