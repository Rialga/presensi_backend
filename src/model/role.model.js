module.exports = (sequelize, DataTypes) => {
  const Role = sequelize.define('role', {
    role_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true, // Automatically gets converted to SERIAL for postgres
    },
    role_name: {
      type: DataTypes.STRING,
    },
  },
  {
    timestamps: false,
  });

  return Role;
};
