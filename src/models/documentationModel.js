import { DataTypes } from "sequelize";
import connection from "../config/sequelize.js";

const Documentation = connection.define("documentation", {
    documentation_id: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: DataTypes.STRING(45),
        allowNull: false,
    },
    last_name_one: {
        type: DataTypes.STRING(45),
        allowNull: false,
    },
    last_name_two: {
        type: DataTypes.STRING(45),
        allowNull: false,
    },
});


export default User;
