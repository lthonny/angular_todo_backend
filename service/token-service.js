const jwt = require('jsonwebtoken');
const models = require("../models/index");
const TokenModel = models.RefreshToken;

class TokenService {
  generateTokens(payload) {
    const accessToken = jwt.sign(payload, process.env.JWT_ACCESS_SECRET, { expiresIn: '30m' });
    const refreshToken = jwt.sign(payload, process.env.JWT_REFRESH_SECRET, { expiresIn: '30d' });
    console.log({
      accessToken,
      refreshToken
    });
    return {
      accessToken,
      refreshToken
    };
  }

  async saveToken(user, refreshToken) {
    // const tokenModal = await TokenModel.findOne({ where: { user_id: user.id } });

    // console.log('tokenModal', tokenModal);

    // if (tokenDate) {
    //   tokenDate.refreshToken = refreshToken;
    //   return tokenDate.save();
    // }

    const token = await TokenModel.create({ refreshToken, user_id: user.id });
    return token;
  }


}

module.exports = new TokenService();