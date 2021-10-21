const { Schema, model, Types } = require('mongoose');
const { isEmail } = require('validator');

const schema = new Schema({
  username: {
    type: String,
    required: [true, 'Please enter username'],
    unique: true
  },
  email: {
    type: String,
    required: [true, 'Please enter an email'],
    unique: true,
    validate: [isEmail, 'Please enter a valid email']
  },
  password: {
    type: String,
    required: [true, 'Please enter a valid password'],
    minlength: [6, 'Minimum password length must be 6 characters'],
  },
  first_name: {
    type: String,
    required: true,
  },
  last_name: {
    type: String,
    required: true,
  },

  addresses: [{
    street: String,
    flat_number: Number,
    district: String,
    region: String,
  }]
});

module.exports = {
  UserModel: model('User', schema),
}