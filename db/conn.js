const mongoose = require("mongoose");

const db = process.env.DB;

const isDbConnected = async () => {
  try {
    await mongoose.connect(db, {
      // useCreateIndex: true,
      useNewUrlParser: true,
      useUnifiedTopology: true,
      // useFindAndModify: false,
    });
    console.log("database connected .....!");
  } catch (error) {
    console.log(error);
  }
};
isDbConnected();
