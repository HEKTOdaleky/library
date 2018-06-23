const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const GroupSchema = new Schema({
    name: {
        type: String,
        require: true,
        unique: true,
        validate: {
            validator: async function (value) {
                const group = await Group.findOne({name: value});
                if (group) throw new Error('This group already exists');
                return true;
            },
            message: 'This group already exists'
        }
    }
});

const Group = mongoose.model('Group', GroupSchema);

module.exports = Group;
