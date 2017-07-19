/**
 * Account.js
 *
 * @description :: TODO: Model que representa a entidade conta.
 * @author:: Lucas Henrique de Abreu <lucasigual14@gmail.com
 */

module.exports = {
  tableName: 'account',
  meta: {
    schemaName: 'unmatched'
  },
 
  identity: 'account',
  connection: 'postgresqlServer',
 
  attributes: {
    id_account: {
        type: 'integer',
        primaryKey: true
    },
    name: 'string',
    plan: {
        model: 'plan',
        columnName: 'id_plan'
    },
    avatar: 'string',
    city: {
        model: 'city',
        columnName: 'id_city'
    },
    address: 'string',
    number: 'string',
    postal_code: 'string',
    phone: 'string',
    createdAt: 'date',
    updatedAt:'date',
    birthday: 'date',
    active: 'integer'
  }
};

