const Mongoose = require("mongoose");

const db = {
  init: async () => {
    try {
        await Mongoose.connect(process.env.DB_URL);
        console.log("\x1b[32m", "Connection to database: OK");

    } catch (error) {
        console.log("\x1b[31m", "Unable to connect to the database:", error);
    }
  }
};

module.exports = db