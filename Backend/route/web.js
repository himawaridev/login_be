// IMPORT THU VIEN EXPRESS TU NPM

const express = require('express');

// IMPORT CAC ROUTES TU FILE HOMECONTROLLER  #1

const {
    getHomePage
}   = require('../controller/homeController');
const router = express.Router();

// ROUTER METHODS (DINH NGHIA TEN CAC ROUTE DE XU LY O FILE HOMCONTROLLER)

router.get('/', getHomePage);



// EXPORT CAC ROUTER VAO #1

module.exports = router;

