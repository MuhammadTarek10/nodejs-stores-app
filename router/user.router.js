const express = require("express");
const routes = require("../config/api/endpoints");
const userController = require("../controller/user.controller");
const router = express.Router();

router.get(routes.UserCRUD.GET_ALL_USERS, userController.getUserList);
router.post(routes.UserCRUD.CREATE_USER, userController.createUser);
router.get(routes.UserCRUD.GET_USER, userController.getUser);
router.put(routes.UserCRUD.UPADTE_USER, userController.updateUser);
router.delete(routes.UserCRUD.DELETE_USER, userController.deleteUser);

module.exports = router;
