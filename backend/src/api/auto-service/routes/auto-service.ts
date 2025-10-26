/**
 * auto-service router
 */

import { factories } from '@strapi/strapi';

export default factories.createCoreRouter('api::auto-service.auto-service', {
    config: {
        find: {
            middlewares: ["api::auto-service.auto-service-page-populate"]
        }
    }
});
