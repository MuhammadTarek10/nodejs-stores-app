exports.Audit = class Audit {
  constructor(action, data, status, user, time) {
    this.action = action;
    this.data = data;
    this.status = status;
    this.user = user;
    this.time = time;
  }
};
