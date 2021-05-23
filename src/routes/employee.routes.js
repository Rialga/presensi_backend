module.exports = (app) => {
  const employee = require('../controllers/employee.controller');

  const router = require('express').Router();

  router.get('/', employee.allData);
  router.post('/', employee.create);
  router.delete('/:id', employee.delete);

  app.use('/api/employee', router);
};
