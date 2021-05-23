const db = require('../model');

const Employee = db.employee;
// const { Op } = db.Sequelize;

exports.allData = (res) => {
  Employee.findAll()
    .then((data) => {
      res.status(200).send({
        message: 'Success',
        data,
      });
    })
    .catch((err) => {
      res.status(500).send({
        message:
            err.message || 'Gagal Mendapatkan Data Employee.',
      });
    });
};

exports.create = (req, res) => {
  if (!req.body.title) {
    res.status(400).send({
      message: 'Konten Tidak Boleh Kosong!',
    });
  }
  const employeeRequest = {
    
  };

};
