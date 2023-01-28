const { queryList } = require("../db/queries");
const dbConnection = require("../db/connection");
const { User } = require("../models/user.model");
const { Validator } = require("../utils/validation");
const LoggerService = require("../service/logger.service");
const AuditService = require("../service/audit.service");
const { auditAction } = require("../audit/audit.action");
const utils = require("../utils/utils");

const logger = new LoggerService("user.controller");

exports.getUserList = async (req, res) => {
  try {
    const query = queryList.GET_USERS;
    const users = await dbConnection.dbQuery(query);
    logger.info("Get All Users");
    /*
        // MAKE SURE TO UNCOMMENT THIS CODE TO ENABLE AUDIT
        AuditService.prepareAudit(
          auditActions.GET_ALL_USERS,
          users.rows,
          "Success",
          req.user,
          utils.dateFormat()
        );
        */
    res.send(users.rows);
  } catch (err) {
    logger.error(err);
    res.send(err);
  }
};

exports.createUser = async (req, res) => {
  try {
    const { username, password, email, role, phone, userTypeCode } = req.body;
    //* Validation
    const validator = new Validator();
    const user = new User(username, password, email, role, phone, userTypeCode);
    if (!validator.isValidUser(user))
      return res.status(400).send("Invalid User");

    const query = queryList.CREATE_USER;
    const values = [user.username, user.password, user.email, user.role];
    const result = await dbConnection.dbQuery(query, values);
    logger.info("Create User");
    /*
        // MAKE SURE TO UNCOMMENT THIS CODE TO ENABLE AUDIT
        AuditService.prepareAudit(
          auditActions.CREATE_USER,
          result.rows,
          "Success",
          req.user,
          utils.dateFormat()
        );
        */
    res.send(result.rows);
  } catch (err) {
    logger.error(err);
    res.send(err);
  }
};

exports.getUser = async (req, res) => {
  console.log("Get User");
};

exports.updateUser = async (req, res) => {
  console.log("Update User");
};

exports.deleteUser = async (req, res) => {
  console.log("Delete User");
};
