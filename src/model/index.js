const Sequelize = require('sequelize');
const dbConfig = require('../../config/db.config');

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle,
  },
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.employee = require('./employee.model')(sequelize, Sequelize);
db.role = require('./role.model')(sequelize, Sequelize);

db.role.hasMany(db.employee, { foreignKey: 'role_id', as: 'employee' });
db.employee.belongsTo(db.role, { foreignKey: 'role_id', as: 'role' });

module.exports = db;
