import { DataTypes } from "sequelize";
import connection from "../config/sequelize.js";

const User = connection.define("user", {
  email: {
    type: DataTypes.STRING(80),
    allowNull: false,
    primaryKey: true,
  },
  first_name: {
    type: DataTypes.STRING(45),
    allowNull: false,
  },
  last_name: {
    type: DataTypes.STRING(45),
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING(80),
    allowNull: false,
  },
});


export default User;
