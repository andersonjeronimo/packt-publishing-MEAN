var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var expenseSchema = new Schema({
  valor: Number,
  descricao: String,
  data: Date
});

mongoose.model('Expense', expenseSchema);
  
  