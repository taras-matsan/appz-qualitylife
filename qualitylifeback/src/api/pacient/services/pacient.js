'use strict';

/**
 * pacient service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::pacient.pacient');
