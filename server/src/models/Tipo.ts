import { Sequelize, UUIDV4, DataTypes  } from "sequelize";


module.exports = (DATA_BASE: Sequelize) => {
  DATA_BASE.define(
    "Tipo",
    {
      id: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false,
      },
      nombre: {
        type: DataTypes.STRING,
      },
    },
    {
      timestamps: false,
    }
  );
};