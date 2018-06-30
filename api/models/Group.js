const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const GroupSchema = new Schema({
  name: {
    type: String,
    require: true,
    validate: {
      validator: async function(value) {
        const group = await Group.findOne({ name: value });
        if (group) throw new Error("Такая группа уже существует");
        return true;
      },
      message: "Такая группа уже существует"
    }
  }
});

const Group = mongoose.model("Group", GroupSchema);
module.exports = Group;
