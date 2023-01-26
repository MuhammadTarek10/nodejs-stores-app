const randomString = require("randomstring");

exports.generateCode = () => {
  return randomString.generate({
    length: 6,
    charset: "alphabetic",
    capitalization: "uppercase",
  });
};
