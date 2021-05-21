module.exports = (app) => {
  const employee = require('../controllers/employee.controller');

  const router = require('express').Router();

  router.get('/', employee.allData);

  app.use('/api/employee', router);
};
