const express = require('express');
const router = express.Router();
const {createUser , findUsers, updateUser, deleteUser} = require("../controllers/userController");
router.post('/createuser',createUser);
router.get('/getusers', findUsers);
router.put('/updateuser/:id',updateUser);
router.delete('/deleteuser/:id',deleteUser);




module.exports = router;