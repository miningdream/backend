const sequelize = require("../sequelize");
const { Model, DataTypes } = require("sequelize");

class Schema extends Model {}
Schema.init({
    data_id: {
        type: DataTypes.UUID(),
        defaultValue: DataTypes.UUIDV4()
    },
    subject: {
        type: DataTypes.TEXT("long")
    },
    content: {
        type: DataTypes.TEXT("long")
    },
    banner_name: {
        type: DataTypes.TEXT("long"),
        defaultValue: null
    },
    banner_base64: {
        type: DataTypes.TEXT("long"),
        defaultValue: null
    }
}, {
    modelName: "courses-elements",
    sequelize
});

module.exports = Schema;