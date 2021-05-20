module.exports = (app) => {
  const role = require('../controllers/role.controller');

  const router = require('express').Router();

  router.get('/', role.allData);

  app.use('/api/role', router);
};
