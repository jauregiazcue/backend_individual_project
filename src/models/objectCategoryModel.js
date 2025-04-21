import { DataTypes } from "sequelize";
import connection from "../config/sequelize.js";

const ObjectCategory = connection.define("object_category", {
    object_category_id: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        primaryKey: true,
        autoIncrement:true
    },
    name: {
        type: DataTypes.STRING(80),
        allowNull: false,
    },

});


export default ObjectCategory;
