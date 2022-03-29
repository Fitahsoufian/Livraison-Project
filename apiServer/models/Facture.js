const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = require("../config/DbConfig")
class Facture extends Model {}

Facture.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true

    },

    totalPrix: {
        type: DataTypes.INTEGER,
        allowNull: false

    },
},{
    sequelize:sequelize,
    modelName:"Facture"
})


module.exports = Facture