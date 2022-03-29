const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = require("../config/DbConfig")

class RepasCategorie extends Model {}

RepasCategorie.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true

    },

    type: {
        type: DataTypes.STRING,
        allowNull: false

    },
},{
    sequelize:sequelize,
    modelName:"RepasCategorie"
})

    
module.exports = RepasCategorie