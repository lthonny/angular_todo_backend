const userService = require('../../service/user-service');

class UserController {
  async registration(req, res) {
    try {
      //     const errors = validationResult(req);
      //     if (!errors.isEmpty()) {
      //       return next(ApiError.BadRequest('Ошибка при валидации', errors.array()))
      // }
      const { name, email, password } = req.body;
      const userData = await userService.registration(name, email, password);

      res.cookie('refreshToken', userData.refreshToken, { maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true });
      return res.json(userData);
      // return [];
    } catch (e) {
      // next(e);
      console.log(e);
    }
  }

  async login(req, res, next) {
  }

  async logout(req, res, next) {
  }

  async activate(req, res, next) {
  }

  async refresh(req, res, next) {
  }

  async getUsers(req, res, next) {
  }
}


module.exports = new UserController();