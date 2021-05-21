const db = require('../model');

const Employee = db.employee;
// const { Op } = db.Sequelize;

exports.allData = (req, res) => {
  Employee.findAll()
    .then((data) => {
      res.statusCode = 200;
      res.statusMessage = 'ini Data Role';
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
            err.message || 'Some error occurred while retrieving tutorials.',
      });
    });
};
