const express = require('express');
const router = express.Router();
const {signup} = require('../controller/user.controller');
const {login} = require('../controller/user.controller');

router.post('/signup', signup)
router.post('/login', login)

module.exports = router;