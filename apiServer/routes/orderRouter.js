const express = require('express');
const router = express.Router();
const {clientMiddleware,} = require("../middlewars/roleMiddleware")
const {createOrder , findOrders, updateOrder, deleteOrder} = require("../controllers/orderController");
router.post('/createorder',clientMiddleware,createOrder);
router.get('/getorders', findOrders);
router.put('/updateorder/:id',updateOrder);
router.delete('/deleteorder/:id',deleteOrder);




module.exports = router;