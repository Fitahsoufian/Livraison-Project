const express = require('express');
const router = express.Router();
const multer = require("multer")
const shortid = require("shortid")
const {createRepas , findRepas, updateRepas, deleteRepas} = require("../controllers/repasController");
const path = require('path');
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join(path.dirname(__dirname), './images'))
    },
    filename: function (req, file, cb) {
      cb(null, shortid.generate() + '-' + file.originalname)
    }
})
const Upload= multer({storage})

router.post('/createrepas',Upload.single('image'), createRepas);
router.get('/getrepas', findRepas);
router.put('/updaterepas/:id',updateRepas);
router.delete('/deleterepas/:id',deleteRepas);




module.exports = router;