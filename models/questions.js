var mongoose = require('mongoose'); 

var Questions = mongoose.model('Questions',{
   question: String,
   answer: String
});