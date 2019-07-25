const mongoose = require('mongoose');
const { Type } = require('./Type');

const apartmentSchema = mongoose.Schema({
  name: { type: String, required: true },
  type: {
    type: String,
    required: true,
    validate: {
      async validator(typeName) {
        const types = await Type.find().exec();
        return types.some(type => type.name === typeName);
      },
      message: props => `${props.value} is an unknown type`
    }
  },
  price: { type: Number, min: 1, required: true },
  rooms: { type: Number, min: 1, required: true },
  amenities: { type: [String] },
  pictureURL: { type: String, required: true }
});

const Apartment = mongoose.model('apartment', apartmentSchema);
module.exports = { Apartment };
