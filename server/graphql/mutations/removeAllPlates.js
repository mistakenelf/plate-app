const PlateModel = require("../../models/Plate");
const PlateType = require("../types/Plate");

module.exports = {
  name: "removeAllPlates",
  type: PlateType,
  resolve() {
    return new Promise((resolve, reject) => {
      PlateModel.remove({}, (res, err) => {
        err ? reject(err) : resolve(res);
      });
    });
  }
};
