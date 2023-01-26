const express = require("express");
const routes = require("../config/api/endpoints");
const storeCotnroller = require("../controller/store.controller");
const router = express.Router();

router.get(routes.StoreCRUD.GET_ALL_STORES, storeCotnroller.getAllStores);
router.post(routes.StoreCRUD.CREATE_STORE, storeCotnroller.createStore);
router.get(routes.StoreCRUD.GET_STORE, storeCotnroller.getStore);
router.put(routes.StoreCRUD.UPDATE_STORE, storeCotnroller.updateStore);
router.delete(routes.StoreCRUD.DELETE_STORE, storeCotnroller.deleteStore);

module.exports = router;
