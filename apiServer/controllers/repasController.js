const {Repas} = require("../config/Migrations");

// Create and Save a new Tutorial
exports.createRepas = async (req, res) => {
    try {
      
        const repas = await Repas.create({
          name: req.body.name,
          image : req.file.path,
          description: req.body.description,
          prix: req.body.prix,
          RepasCategorieId: req.body.RepasCategorieId 
        });
        console.log(req.body.RepasCategorieId);
        console.log("done");
    
        res.status(201).json({
          repas: repas,
        });
      } catch (error) {
        res.status(400).send(error);
        console.log(error);
      }
    };

// Retrieve all Tutorials from the database.
exports.findRepas = async (req, res) => {
    try {
    
        const repas = await Repas.findAll();
    
        if (!repas) {
          res.status(401).json({
            message: "email or password not correct",
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
exports.updateRepas = async (req,res)=>{
    try {
        const id = req.params.id
        const data = req.body

        const repas = await Repas.update(data,{where: {id: id}})

        res.status(200).json({
            message: 'repas updated successfully',
            repas: repas
        })
    } catch (error) {
        res.send(error)
        
    }
}


exports.deleteRepas = async (req,res)=>{
    try {
        const id = req.params.id

        const repas = await Repas.destroy({where: {id: id}})

        res.status(200).json({
            message: 'repas deleted successfully'
        })
    } catch (error) {
        res.send(error)
        
    }
}
