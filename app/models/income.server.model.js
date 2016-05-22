var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var incomeSchema = new Schema({
  valor: Number,
  forma_pagamento: String,
  data: Date
});

mongoose.model('Income', incomeSchema); 