const db = require('../model');

const Role = db.role;
// const { Op } = db.Sequelize;

exports.allData = (req, res) => {
  Role.findAll()
    .then((data) => {
      res.status(200).send({
        message: 'Success',
        data,
      });
    })
    .catch((err) => {
      res.status(500).send({
        message:
            err.message || 'Some error occurred while retrieving tutorials.',
      });
    });
};
