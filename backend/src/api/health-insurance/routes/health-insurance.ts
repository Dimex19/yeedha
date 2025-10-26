/**
 * health-insurance router
 */

import { factories } from '@strapi/strapi';

export default factories.createCoreRouter('api::health-insurance.health-insurance', {
    config: {
        find: {
            middlewares: ["api::health-insurance.health-insurance-page-populate"]
        }
    }
});
