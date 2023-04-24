import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: { type: String, required: [true, 'Please enter name']},
  username: { type: String, required: [true, 'Please enter username'], unique: true },
  email: { type: String, required: [true, 'Please enter email'], unique: true },
  password: { type: String, required: [true, 'Please enter password'] },
}, {
  timestamps: true,
});

const User = mongoose.model('User', userSchema);

export default User