const mongoose = require("mongoose");
const express = require("express");
const userRoutes = require("./routes");

const app = express();

app.use(express.json());

app.use("/", userRoutes);

const PORT = process.env.PORT || 3002;

const startServer = async () => {
    try {
        // Connect to MongoDB
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("MongoDB connected successfully");

        app.listen(PORT, () => {
            console.log(`Server running on http://localhost:${PORT}`);
        });
    } catch (error) {
        console.error("Database connection failed:", error);
        process.exit(1);
    }
};

startServer();