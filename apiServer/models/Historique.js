const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = require("../config/DbConfig")
class Order extends Model {}

Order.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true

    },
},{
    sequelize:sequelize,
    modelName:"Historique"
})


module.exports = Order