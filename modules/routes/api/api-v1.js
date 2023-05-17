const express = require('express');
const router = express.Router();

const { api: controllerApi } = config.path.controller;
const packageController = require(`${controllerApi}/packageController`);
const bookingController = require(`${controllerApi}/bookingController`);
const userController = require(`${controllerApi}/userController`);

router.get('/packages', packageController.index);
router.get('/bookings', bookingController.index);
router.get('/users', userController.index);

module.exports = router;
