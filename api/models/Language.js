const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const LanguageSchema = new Schema({
    title: {
        type: String,
        required: true,
        validate: {
            validator: async function (value) {
                const lang = await Language.findOne({title: value});
                if (lang) throw new Error("Указанный язык уже есть в базе");
                return true;
            },
            message: "Указанный язык уже есть в базе"
        }
    }
});

const Language = mongoose.model("Language", LanguageSchema);
module.exports = Language;