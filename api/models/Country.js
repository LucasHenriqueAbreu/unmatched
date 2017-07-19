/**
 * Country.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  tableName: 'country',
  meta: {
    schemaName: 'unmatched'
  },

  identity: 'country',
  connection: 'postgresqlServer',
  attributes: {
    id_country: {
        type: 'integer',
        primaryKey: true
    },
    name: 'string',
    createdAt: 'date',
    updatedAt:'date'
  }
};

