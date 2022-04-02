const express = require('express');
const router = express.Router();
const multer = require("multer")

const {createRepasCategorie , findRepasCategories, updateRepasCategorie, deleteRepasCategorie} = require("../controllers/repasCategorieController");

router.post('/createrepascategorie', createRepasCategorie);
router.get('/getrepascategories', findRepasCategories);
router.put('/updaterepascategorie/:id',updateRepasCategorie);
router.delete('/deleterepascategorie/:id',deleteRepasCategorie);




module.exports = router;