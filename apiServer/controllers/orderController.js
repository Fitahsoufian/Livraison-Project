const {Order} = require("../config/Migrations");
const {RepasOrder}= require("../config/Migrations")
const jwt = require('jsonwebtoken')
const dotenv = require("dotenv").config();


exports.createOrder = async (req, res) => {
  const token = req.headers.authorization;
  const payload = jwt.decode(token, process.env.SECRET_KEY)
    try { 
        const orders = await Order.create({
          status: req.body.status,
          adresse: req.body.adresse,
          clientIdId: payload.id
        });
  req.body.repasorders.forEach (async (order) => {
   await RepasOrder.create({
      quantity : order.quantity,
      RepaId : order.RepaId,
      OrderId :  orders.id
  });
  console.log('RepaId', order.RepaId);
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

    exports.updateOrderStatus = async (req,res)=>{
      const id = req.params.id
      const {status} = req.body
  
      try {
          if(!status || !id){
              res.status(400).json({
                  message: 'please insert a status or id'
              })
          }
  
  
          const updateStatus = await Order.update({status: status}, {where: {id: id}})
  
          res.status(200).json({
              message: 'status updated successfully',
              updateStatus
          })
      } catch (error) {
          res.send(error)
          
      }
  }


exports.findOrders = async (req, res) => {
    try {
    
        const orders = await Order.findAll();
    
        if (!orders) {
          res.status(401).json({
            message: "oders not found",
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
