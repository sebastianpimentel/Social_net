//libreria
const mongoose = require("mongoose");

const dbConnection = async () => {
  try {
    await mongoose.connect(process.env.BD_CONNECTION, {
      useNewUrlParser: true,
      useFindAndModify: false,
      useCreateIndex: true,
      useUnifiedTopology: true,
    });
    console.log("Connection with MongoDB : ON");
  } catch (e) {
    console.log("Error connectiong to MongoDB : ", e);
    throw new error("Error connection to MongoDB");
  }
};
module.exports = { dbConnection };
