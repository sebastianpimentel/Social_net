//libreria
const mongoose = require("mongoose");
//schema
const postSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.ObjectId, ref: "user" },
  description: String,
  numeral: String,
  date: { type: Date, default: Date.now },
  dbStatus: Boolean,
});
//creamos schema en mongoose
const post = mongoose.model("post", postSchema);
//exportamos
module.exports = post;
