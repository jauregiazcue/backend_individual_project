import { DataTypes } from "sequelize";
import connection from "../config/sequelize.js";

const Object = connection.define("object", {
    object_id: {
        type: DataTypes.STRING(45),
        allowNull: false,
        primaryKey: true,
        autoIncrement:true
    },
    lost_at: {
        type: DataTypes.DATE,
        defaultValue: new Date(),
        allowNull: false,
    },
    image_source: {
        type: DataTypes.STRING(80),
        allowNull: false,
    },
    documentation_id: {
        type: DataTypes.STRING(45),
        allowNull: true,
    },
    object_category_id: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
    },
});


export default Object;
