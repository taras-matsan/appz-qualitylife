'use strict';

/**
 * medical-examination service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::medical-examination.medical-examination');
