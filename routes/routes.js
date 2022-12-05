require('dotenv').config({ path: './.env' });
const express = require('express');
const router = express.Router();
const toDoListController = require('../controllers/toDoListController');

router.post('/', toDoListController.postToDoItem);

module.exports = router;
