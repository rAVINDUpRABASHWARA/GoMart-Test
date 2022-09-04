const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const mongoose = require('mongoose');

const app = express();
require('dotenv').config();

const port = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

const URL = process.env.URL;

mongoose.connect(URL, {
    //useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    //useFindAndModify: false
});

const connection = mongoose.connection;
connection.once('open', () => {
    console.log("Database is connected");
})

app.use("/api/customer", require("./routes/customerRoutes"));

app.listen(port, () => {
    console.log(`Server is up and running on port ${port}`);
})