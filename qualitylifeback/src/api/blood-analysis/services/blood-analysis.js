'use strict';

/**
 * blood-analysis service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::blood-analysis.blood-analysis');
