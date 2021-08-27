const models = require("../models/index");
const UserModel = models.User;
const bcrypt = require('bcryptjs');
const tokenService = require('./token-service');
const UserDto = require('../dtos/user-dto');

class UserService {
  async registration(name, email, password) {
    try {
      const candidate = await UserModel.findOne({ where: { email } });

      if (candidate) {
        throw new Error(`Пользователь с почтовым адресом ${email} уже существует`);
      }

      const hashPassword = await bcrypt.hash(password, 3);
      const user = (await UserModel.create({ name, email, password: hashPassword })).get();
      // console.log('user', user);
      // const UserDate = new UserDto(user);
      const tokens = tokenService.generateTokens({ ...user });

      await tokenService.saveToken(user, tokens.refreshToken);
      // return { ...tokens, user: UserDate }
      // return [];
    } catch (e) {
      console.log(e);
      // return next(new Error(e));
    }
  }
}

module.exports = new UserService();