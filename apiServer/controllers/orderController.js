const Order = require("../models/Order");

// Create and Save a new Tutorial
exports.createOrder = async (req, res) => {
    try {
       console.log(req.body.adresse); 
        const orders = await Order.create({
          status: req.body.status,
          adresse: req.body.adresse
        });
    
        console.log("done");
    
        res.status(201).json({
          orders: orders,
        });
      } catch (error) {
        res.status(400).send(error);
        console.log(error);
      }
    };

// Retrieve all Tutorials from the database.
exports.findOrders = async (req, res) => {
    try {
    
        const orders = await Order.findAll();
    
        if (!orders) {
          res.status(401).json({
            message: "email or password not correct",
          });
        } else {
          res.status(201).json({
            message: "success",
            orders:orders
          });
        }
      } catch (error) {
        res.status(401).send(error);
      }
    
};
exports.updateOrder = async (req,res)=>{
    try {
        const id = req.params.id
        const data = req.body

        const orders = await Order.update(data,{where: {id: id}})

        res.status(200).json({
            message: 'order updated successfully',
            orders:orders
        })
    } catch (error) {
        res.send(error)
        
    }
}


exports.deleteOrder = async (req,res)=>{
    try {
        const id = req.params.id

        const orders = await Order.destroy({where: {id: id}})

        res.status(200).json({
            message: 'orders deleted successfully'
        })
    } catch (error) {
        res.send(error)
        
    }
}
