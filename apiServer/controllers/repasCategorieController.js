const Repas = require("../models/RepasCategorie");


exports.createRepasCategorie = async (req, res) => {
    try {
        const repas = await Repas.create({
          type: req.body.type,
        });
    
        console.log("done");
    
        res.status(201).json({
          repas: repas,
        });
      } catch (error) {
        res.status(400).send(error);
        console.log(error);
      }
    };


exports.findRepasCategories = async (req, res) => {
    try {
    
        const repas = await Repas.findAll();
    
        if (!repas) {
          res.status(401).json({
            message: "categories not found",
          });
        } else {
          res.status(201).json({
            message: "success",
            repas:repas
          });
        }
      } catch (error) {
        res.status(401).send(error);
      }
    
};
exports.updateRepasCategorie = async (req,res)=>{
    try {
        const id = req.params.id
        const data = req.body

        const repas = await Repas.update(data,{where: {id: id}})

        res.status(200).json({
            message: 'categorie updated successfully',
            repas: repas
        })
    } catch (error) {
        res.send(error)
        
    }
}


exports.deleteRepasCategorie = async (req,res)=>{
    try {
        const id = req.params.id

        const repas = await Repas.destroy({where: {id: id}})

        res.status(200).json({
            message: 'categorie deleted successfully'
        })
    } catch (error) {
        res.send(error)
        
    }
}
