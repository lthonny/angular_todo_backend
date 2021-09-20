const express = require('express');
const router = express.Router();

const { body } = require('express-validator');

const authorize = require('../middlewares/authorize');

const authMiddleware = require('../middlewares/auth-middleware');

const userController = require('../controllers/userController');
const modelPostgres = require('../controllers/model-postgresql');

router.post('/api/sign_up',
  body('email').isEmail(),
  body('password').isLength({ min: 6, max: 32 }),
  userController.sign_up);
router.post('/api/sign_in', userController.sign_in);
router.post('/api/logout', userController.logout);
router.get('/api/refresh', userController.refresh);

router.get('/api/isauth', authorize, modelPostgres.isauth);



router.post('/api/create', authorize, modelPostgres.create);
router.get('/api/fetchOne/:id', authorize, modelPostgres.fetchOne);
router.get('/api/fetchAll', authorize, modelPostgres.fetchAll);
router.put('/api/update/:id', authorize, modelPostgres.update);
router.delete('/api/delete/:id', authorize, modelPostgres.delete);


module.exports = router;