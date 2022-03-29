const express = require('express');
const { SignUp, SignIn } = require('../controllers/authentification');
const router = express.Router();


router.post('/signup', SignUp);
router.post('/signin', SignIn);



module.exports = router;