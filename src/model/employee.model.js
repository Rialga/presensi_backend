module.exports = (sequelize, DataTypes) => {
  const Employee = sequelize.define('employees', {
    first_name: {
      type: DataTypes.STRING,
    },
    last_name: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
    },
    phone: {
      type: DataTypes.STRING(50),
    },
    salary: {
      type: DataTypes.DECIMAL(11, 2),
    },
  });

  return Employee;
};
