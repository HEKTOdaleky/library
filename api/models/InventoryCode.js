const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const InventoryCodeSchema = new Schema({
  bookCode: {
    type: Number,
    min: 0,
    unique: true
  },
  readerCode: {
    type: Number,
    min: 0,
    unique: true
  }
});

const InventoryCode = mongoose.model("InventoryCode", InventoryCodeSchema);
module.exports = InventoryCode;
