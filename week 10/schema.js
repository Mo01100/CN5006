const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({
   booktitle: {
       type: String,
       required: true 
   },
   PubYear: {
       type: Number,  
       validate: {
           validator: function(value) {
               return value >= 1000 && value <= 9999;
           },
           message: 'Publication year must be between 1000 and 9999.'
       }
   },
   author: { type: String },   
   Topic: { type: String },   
   format: { type: String }    
});
module.exports = mongoose.model('BookModel', BookSchema, 'BookCollection2');
