exports.User = class User {
  constructor(id, username, password, role, email, phone, userTypeCode) {
    this.id = id;
    this.username = username;
    this.password = password;
    this.role = role;
    this.email = email;
    this.phone = phone;
    this.active = true;
    this.userTypeCode = userTypeCode;
  }
};
