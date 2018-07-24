const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const GroupSchema = new Schema({
  name: {
    type: String,
    require: true
  },
  isArchive: {
    type: Boolean,
    default: false
  }
});

const Group = mongoose.model("Group", GroupSchema);
module.exports = Group;
