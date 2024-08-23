const app = require("./app");
const dotenv = require("dotenv");
const connectDB = require("./config/database");
const connectDatabase = require("./config/database");

// Config

dotenv.config({ path: "backend/config/config.env" });

// Connecting Database

connectDatabase();

app.listen(process.env.PORT, () => {
  console.log(`Server Is Working On https://localhost:${process.env.PORT}`);
});
