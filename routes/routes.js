const express = require('express');
const router = express.Router();

const { body } = require('express-validator');

const authorize = require('../middlewares/authorize');

// router.post('/api/auth/sign_up', validateAuth, auth.signUp);
// router.post('/api/auth/sign_in', auth.signIn);

// router.post('/api/tasks', authorize, model.create);
// router.get('/api/tasks', authorize, model.fetchAll);
// router.get('/api/tasks/:id', authorize, model.fetchOne);
// router.put('/api/tasks/:id', authorize, model.update);
// router.delete('/api/tasks/:id', authorize, model.delete);


const userController = require('../controllers/userController');
const tasksControlle = require('../controllers/tasksController');

router.post('/sign_up',
  body('email').isEmail(),
  body('password').isLength({ min: 6, max: 32 }),
  userController.sign_up);
router.post('/sign_in', userController.sign_in);
// router.post('/logout', userController.logout);
// router.get('/refresh', userController.refresh);
// router.get('/tasks', userController.getUsers);


router.post('/api/tasks', authorize, tasksControlle.create);






const model = require('./../controllers/model-postgresql');

// const authorize = require('../middlewares/authorize');
const tasksController = require('../controllers/tasksController');
const validateAuth = require('../middlewares/auth');
const auth = require('../controllers/authController');

router.post('/api/auth/sign_up', validateAuth, auth.signUp);
router.post('/api/auth/sign_in', auth.signIn);

router.post('/api/tasks', authorize, model.create);
// router.get('/api/tasks', authorize, model.fetchAll);
// router.get('/api/tasks/:id', authorize, model.fetchOne);
// router.put('/api/tasks/:id', authorize, model.update);
// router.delete('/api/tasks/:id', authorize, model.delete);


module.exports = router;