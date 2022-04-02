const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = require("../config/DbConfig")

class Repas extends Model {}

Repas.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true

    },

    name: {
        type: DataTypes.STRING,
        allowNull: false

    },

    image: {
        type: DataTypes.STRING,
        allowNull: false,
        required: false
    },

    description: {
        type: DataTypes.STRING,
        allowNull: false
    },

    prix: {
        type: DataTypes.STRING,
        allowNull: false
    },
},{
    sequelize:sequelize,
    modelName:"Repas"
})




module.exports = Repas