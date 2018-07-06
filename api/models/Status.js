const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const StatusSchema = new Schema({
    name: {
        type: String,
        required: true,
        validate: {
            validator: async function(value) {
                const state = await Status.findOne({ name: value });
                if (state) throw new Error();
                return true;
            },
            message: "Такой статус уже существует"
        }

    },
    description: {
        type: String,
        required: true
    }
});

const Status = mongoose.model("Status", StatusSchema);
module.exports = Status;
