const express = require('express');
const { createFacture} = require('../controllers/factureController');
const router = express.Router();


router.post('/facture/:id', createFacture);




module.exports = router;