const express = require('express');
const router = express.Router();

const model = require('./../backend/controllers/model-postgresql');

const auth = require('./../backend/controllers/authController');
const validateAuth = require('../middlewares/auth');
const authorize = require('../middlewares/authorize');


router.post('/api/auth/sign_up', validateAuth, auth.signUp);
router.post('/api/auth/sign_in', auth.signIn);

router.post('/api/tasks', authorize, model.create);
router.get('/api/tasks', authorize, model.fetchAll);
router.get('/api/tasks/:id', authorize, model.fetchOne);
router.put('/api/tasks/:id', authorize, model.update);
router.delete('/api/tasks/:id', authorize, model.delete);

module.exports = router;