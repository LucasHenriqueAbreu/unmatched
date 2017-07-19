/**
 * Plan.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  tableName: 'plan',
  meta: {
    schemaName: 'unmatched'
  },
  identity: 'plan',
  connection: 'postgresqlServer',
  attributes: {
    id_plan: {
        type: 'integer',
        primaryKey: true
    },
    name: 'string',
    price: 'float',
    invitation_limit: 'integer',
    createdAt: 'date',
    updatedAt:'date'
  }
};

