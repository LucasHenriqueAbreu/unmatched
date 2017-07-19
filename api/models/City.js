/**
 * City.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  tableName: 'city',
  meta: {
    schemaName: 'unmatched'
  },

  identity: 'city',
  connection: 'postgresqlServer',
  attributes: {
    id_city: {
        type: 'integer',
        primaryKey: true
    },
    name: 'string',
    state: {
        model: 'state',
        columnName: 'id_state'
    },
    createdAt: 'date',
    updatedAt:'date',
  }
};

