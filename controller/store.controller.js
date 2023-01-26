const { queryList } = require("../db/queries");
const dbConnection = require("../db/connection");
const { Store } = require("../models/store.model");
const utils = require("../utils/utils");
exports.getAllStores = async (req, res) => {
  try {
    const query = queryList.GET_ALL_STORES;
    const stores = await dbConnection.dbQuery(query);
    res.send(stores.rows);
  } catch (err) {
    console.log(err);
    res.send(err);
  }
};

exports.createStore = async (req, res) => {
  try {
    const code = utils.generateCode();
    const store = new Store(req.body.name, req.body.address, code);
    const query = queryList.queryList.CREATE_STORE;
    const values = [store.name, store.address, store.code];
    const result = await dbConnection.dbQuery(query, values);
    res.send(result);
  } catch (err) {
    console.log(err);
    res.send(err);
  }
};

exports.getStore = async (req, res) => {
  res.send("Get Store");
};

exports.updateStore = async (req, res) => {
  res.send("Update Store");
};

exports.deleteStore = async (req, res) => {
  res.send("Delete Store");
};
