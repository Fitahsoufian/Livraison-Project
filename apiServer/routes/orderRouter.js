const express = require('express');
const router = express.Router();
const {checkClientRole }= require("./../middlewars/roleMiddleware")
const {createOrder , findOrders, updateOrder, deleteOrder} = require("../controllers/orderController");
router.post('/createorder',checkClientRole,createOrder);
router.get('/getorders',checkClientRole, findOrders);
router.put('/updateorder/:id',checkClientRole,updateOrder);
router.delete('/deleteorder/:id',checkClientRole,deleteOrder);




module.exports = router;