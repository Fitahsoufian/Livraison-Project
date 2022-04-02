const sequelize = require("../config/DbConfig");
const User = require("../models/User");
const Order = require("../models/Order")
const Repas = require("../models/Repas")
const RepasOrder = require("../models/RepasOrder")
const RepasCategorie = require("../models/RepasCategorie")
const Facture = require("../models/Facture")
const Historique = require("../models/Historique")




Repas.belongsTo(RepasCategorie);
Repas.belongsToMany(Order, {through:RepasOrder});
Order.belongsToMany(Repas, {through:RepasOrder});

RepasCategorie.hasMany(Repas);

Order.belongsTo(User,{as :'livreurId'});
Order.belongsTo(User,{as :'clientId'});

User.hasMany(Order);

Facture.belongsTo(Order);
Order.hasOne(Facture);

Facture.belongsTo(Historique);
Historique.hasMany(Facture)

sequelize.sync({force : false}).then(()=>{
    console.log("Migration Succeed");
})

module.exports = {
    Repas,
    User,
    Order,
    RepasOrder,
    RepasCategorie,
    Historique,
    Facture,    
}