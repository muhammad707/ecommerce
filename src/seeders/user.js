const bcrypt = require('bcryptjs');
const { UserModel } = require('../models/user.model');
require('dotenv').config();

const users = [
  {
    username: 'johndoe',
    email: 'johndoe@gmail.com',
    password: 'password123',
    first_name: 'John',
    last_name: 'Doe',
    address: [{
      street: 'Main Street',
      flat_number: 72,
      district: 'Avenue',
      region: 'California'
    }]
  }
];

module.exports = async function() {
  try {
    const salt = await bcrypt.genSalt(Number(process.env.SALT_ROUNDS));

    await Promise.all(users.map(async user => user.password = await bcrypt.hash(user.password, salt)));

    await UserModel.collection.drop();
    await UserModel.insertMany(users);
    console.log('Dummy Users inserted');
  } catch (error) {
    console.log('Error on dummy Users');
    console.log(error);
    process.exit(1);
  }
};
