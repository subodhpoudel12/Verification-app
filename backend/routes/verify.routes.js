const express = require('express');
const verificationCode = require('../app/controller/verify.controller');
const verify_route = express.Router();

verify_route.post("/verify", verificationCode);

module.exports = verify_route;
