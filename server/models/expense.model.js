import mongoose from 'mongoose';

var ExpenseSchema = mongoose.Schema({
  title: String,
  amount: Number,
  status: Number,
  description: String,
  username: String,
},
{
  timestamps: true
});

export default mongoose.model('Expense', ExpenseSchema);
