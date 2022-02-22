const express = require('express');
const router = express.Router();
const controller = require('../controllers/category-controller');
router.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

router.get('/', controller.get);
router.get('/id/:id', controller.getById);
router.get('/categoryname/:categoryname', controller.getByCategoryname);
router.post('/', controller.post);
router.put('/id/:id', controller.put);
router.delete('/id/:id', controller.delete);

module.exports = router;