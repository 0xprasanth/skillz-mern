/** DB connections */

const { mongoose } = require("mongoose");

// mongoose.connect(process.env.DB_URL);
export function connection() {
  mongoose
    .connect(process.env.DATABASE_URL)
    .then(() => console.log("Connected to MongoDB"))
    .catch((err) => console.error("Error connecting to MongoDB:", err));
}
