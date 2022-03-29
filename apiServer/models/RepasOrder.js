const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = require("../config/DbConfig")
class Order extends Model {}

Order.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true

    },

    quantity: {
        type: DataTypes.INTEGER,
        allowNull: false

    },
},{
    sequelize:sequelize,
    modelName:"RepasOrder"
})


module.exports = Order