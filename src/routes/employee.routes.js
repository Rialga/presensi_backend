module.exports = (app) => {
  const employee = require('../controllers/employee.controller');

  const router = require('express').Router();

  router.get('/', employee.allData);
  router.post('/', employee.create);
  router.delete('/:id', employee.delete);
  router.put('/:id', employee.update);

  router.get('/:id', employee.detail);
  router.put('/updateGaji/:id', employee.updateGaji);

  app.use('/api/employee', router);
};
