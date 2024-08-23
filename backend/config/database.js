const mongoose = require("mongoose");

const connectDatabase = () => {
  mongoose
    .connect(process.env.DB_URI, {
      // useNewUrlParser: true,
      // useUnifiedTopology: true,
      // useCreateIndex: true,
    })
    .then((data) => {
      console.log(`MongoDB Connected With Server: ${data.connection.host}`);
    })
    .catch((err) => {
      console.log(`An Error Occured: ${err}`);
    });
};

module.exports = connectDatabase;
