const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = require("../config/DbConfig")
class Order extends Model {}

Order.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true

    },

    status: {
        type: DataTypes.STRING,
        allowNull: false

    },

    adresse: {
        type: DataTypes.STRING,
        allowNull: false
    },
},{
    sequelize:sequelize,
    modelName:"Order"
})


module.exports = Order