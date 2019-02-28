const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  synopsis: String,
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