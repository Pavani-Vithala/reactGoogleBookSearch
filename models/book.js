const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  book_id:{type: String, required: true},
  title: { type: String, required: true },
  author: { type: String, required: true },
  description: String,
  link: {
    type: String,
    required: true
  },
  picture: {
    type: String,
    //get: v => `${root}${v}`
    required: true
  },
  
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;