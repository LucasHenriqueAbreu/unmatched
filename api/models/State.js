/**
 * State.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  tableName: 'state',
  meta: {
    schemaName: 'unmatched'
  },

  identity: 'state',
  connection: 'postgresqlServer',
  attributes: {
    id_state: {
        type: 'integer',
        primaryKey: true
    },
    name: 'string',
    country: {
        model: 'country',
        columnName: 'id_country'
    }
  }
};

