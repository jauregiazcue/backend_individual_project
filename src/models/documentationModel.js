import { DataTypes } from "sequelize";
import connection from "../config/sequelize.js";

const Documentation = connection.define("documentation", {
    documentation_id: {
        type: DataTypes.STRING(45),
        allowNull: false,
        primaryKey: true,
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


export default Documentation;
