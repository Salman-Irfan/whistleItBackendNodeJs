const mongoose = require("mongoose");
const { config } = require("dotenv");

config(); // Load environment variables from .env file
const MONGODBURI = process.env.MONGODBURI;

const connectToMongo = () => {
    mongoose
        .connect(MONGODBURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        .then(() => {
            console.log(`Connected to MongoDB at ${MONGODBURI}`);
        })
        .catch((error) => {
            console.error(
                `Error connecting to MongoDB at ${MONGODBURI}:`,
                error
            );
        });
};

module.exports = connectToMongo;
