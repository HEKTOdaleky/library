const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const InventoryCode = require('./InventoryCode');

const ReaderSchema = new Schema({
  inventoryCode: {
    type: String,
    },
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  documentNumber: {
    type: String,
    required: true,
    unique: true
  },
  groupId: {
    type: Schema.Types.ObjectId,
    ref: 'Group',
    required: true
  },
  registerDate: {
    type: Date,
    default: Date.now,
    required: true
  },
  isActive: {
    type: Boolean,
    default: true,
    required: true
  }
});

// ReaderSchema.methods.newInventoryCode = async function() {
//   let code;
//
//   const number = await InventoryCode.find().sort({readerCode: 1}).limit(1);
//   const nextNumber = new InventoryCode({
//     readerCode: number + 1
//   });
//   await InventoryCode.save(nextNumber);
//
//   let s = number.toString();
//   if (s.length < 6) {
//     code = ('00000' + s).slice(6);
//   }
//   return code;
// };

const Reader = mongoose.model('Reader', ReaderSchema);

module.exports = Reader;