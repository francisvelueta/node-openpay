const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  email: String,
  password: String
});
userSchema.methods.comparePassword = password => {
  return password;
}

module.exports = mongoose.model('users', userSchema);
