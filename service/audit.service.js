const events = require("events");
const { Audit } = require("../models/audit.model");
const dbConnection = require("../db/connection");

const eventEmitter = new events.EventEmitter();

const auditEvent = "audit";

eventEmitter.on(auditEvent, (audit) => {
  try {
    const query = queryList.AUDIT_EVENT;
    dbConnection.dbQuery(query, [
      audit.action,
      audit.data,
      audit.status,
      audit.user,
      audit.time,
    ]);
  } catch (err) {
    console.log(err);
  }
});

exports.prepareAudit = (action, data, status, user, time) => {
  const audit = new Audit(action, data, status, user, time);
  eventEmitter.emit(audit);
};
