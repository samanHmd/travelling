const express = require('express');
const router = express.Router();

const { api: controllerApi } = config.path.controller;
const packageController = require(`${controllerApi}/packageController`);
const bookingController = require(`${controllerApi}/bookingController`);
const userController = require(`${controllerApi}/userController`);

router.get('/packages', packageController.index.bind(packageController));
router.get('/bookings', bookingController.index.bind(bookingController));
router.get('/users', userController.index.bind(userController));

module.exports = router;
