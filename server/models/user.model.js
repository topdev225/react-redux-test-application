import mongoose from 'mongoose';

var UserSchema = mongoose.Schema({
  username: String,
  email: String,
  password: String,
},
{
  timestamps: true
});

export default mongoose.model('User', UserSchema);
