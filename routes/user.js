const express = require('express');

//create a router

const router = express.Router();

//users routes
router.get('/', getAllUser);

//expcrt router
module.exports = router;
