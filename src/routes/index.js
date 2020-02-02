const express = require('express');
const controller = require('./../controllers/indexControllers');
const router = express.Router();
router.get('/2', function (req, res, next) {
    res.status(200).send({
        title: "Node Express API - Test",
        version: "0.0.1"
    });
});

router.get('/', controller.getUsers)
module.exports = router;