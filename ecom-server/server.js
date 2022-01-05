require("dotenv").config();
const express = require("express");
const app = express();
const connectDB = require("./config/db");
const productRoutes = require("./routes/productRoutes");

connectDB();

app.use(express.json());
app.use("/api/products", productRoutes);
app.use("/api/auth", require("./routes/authRoutes"));

const PORT = process.env.PORT || 5001;

const server = app.listen(PORT, () =>
  console.log(`Server is running on port ${PORT}`)
);

process.on("unhandledRejection", (err, promise) => {
  console.log(`Logged Error: ${err.message}`);
  server.close(() => process.exit(1));
});
