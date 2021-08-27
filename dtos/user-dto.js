module.exports = class UserDto {
  email;
  // isActivated;

  constructor(model) {
    this.email = model.email;
    // this.isActivated = model.isActivated;
  }
}