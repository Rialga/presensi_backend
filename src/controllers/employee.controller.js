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
  if (!req.body.first_name || !req.body.last_name || !req.body.email || !req.body.phone || !req.body.salary || !req.body.role_id) {
    res.status(400).send({
      message: 'Konten Tidak Boleh Kosong!',
    });
  } else {
    const employeeRequest = {
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      email: req.body.email,
      phone: req.body.phone,
      salary: req.body.salary,
      role_id: req.body.role_id,
    };

    Employee.create(employeeRequest)
      .then((data) => {
        res.status(200).send({
          message: 'success input data employee',
          data,
        });
      })
      .catch((err) => {
        res.status(500).send({
          message:
          err.message || 'Some error occurred while creating the Tutorial.',
        });
      });
  }
};

exports.delete = (req, res) => {
  const { id } = req.params;

  Employee.destroy({
    where: { id },
  })
    .then((num) => {
      if (num < 1) {
        res.send({
          message: `Tidak dapat menghapus Employee dengan id=${id}. Employee tidak ditemukan`,
        });
      } else {
        res.send({
          message: `Berhasil Hapus data Employee dengan id=${id}!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message:
        err.message || `Tidak dapat menghapus employee dengan ID=${id}`,
      });
    });
};
