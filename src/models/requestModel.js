import { DataTypes } from "sequelize";
import connection from "../config/sequelize.js";

const Request = connection.define("request", {
    request_id: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        primaryKey: true,
        autoIncrement:true
    },
    requested_at: {
        type: DataTypes.DATE,
        defaultValue: new Date(),
        allowNull: false,
    },
    first_name: {
        type: DataTypes.STRING(45),
        allowNull: false,
    },
    last_name: {
        type: DataTypes.STRING(45),
        allowNull: false,
    },
    dni: {
        type: DataTypes.STRING(45),
        allowNull: true,
    },
    direction: {
        type: DataTypes.STRING(200),
        allowNull: true,
    },
    telephone: {
        type: DataTypes.STRING(45),
        allowNull: true,
    },
    email: {
        type: DataTypes.STRING(45),
        allowNull: true,
    },
    lost_at: {
        type: DataTypes.DATE,
        defaultValue: new Date(),
        allowNull: false,
    },
    place: {
        type: DataTypes.STRING(100),
        allowNull: true,
    },
    description: {
        type: DataTypes.STRING(300),
        allowNull: true,
    },
    object_category_id: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: true,
    },
});


export default Request;
