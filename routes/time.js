const express = require('express');
const router = express.Router();

router.get('/', function(req, res, next) {
    let data = {
        epoch: new Date().getTime()
    };

    res.json(data);
});

module.exports = router;
