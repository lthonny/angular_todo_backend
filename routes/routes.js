const express = require('express');
const router = express.Router();

const getTask = require('./../backend/controllers/getTask');
const allTasks = require('./../backend/controllers/allTasks');
const addTask = require('./../backend/controllers/addTask');
const editTask = require('./../backend/controllers/editTask');
const deleteTask = require('./../backend/controllers/deleteTask');
const order = require('./../backend/controllers/order');
const registration = require('./../backend/controllers/registration');

router.get('/tasks/:id', getTask);
router.get('/tasks', allTasks);
router.post('/tasks', addTask);
router.post('/order', order);
router.post('/registration', registration);


router.put('/tasks/:id', editTask);


router.delete('/tasks/:id', deleteTask);


// router.post('')

module.exports = router;