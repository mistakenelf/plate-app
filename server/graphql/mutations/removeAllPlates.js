const PlateModel = require("../../models/Plate");
const PlateType = require("../types/Plate");

module.exports = {
  name: "removeAllPlates",
  type: PlateType,
  resolve() {
    return PlateModel.remove({});
  }
};
