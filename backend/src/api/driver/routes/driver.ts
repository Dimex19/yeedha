/**
 * driver router
 */

import { factories } from '@strapi/strapi';

export default factories.createCoreRouter('api::driver.driver', {
    config: {
        find: {
            middlewares: ["api::driver.drivers-page-populate"]
        }
    }
});
