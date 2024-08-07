const express = require("express");
const jobroutes = require("./rout/job");
const mongoose = require("mongoose");
const PORT = 4001;
const dotenv = require("dotenv");
dotenv.config({path:"./.env"});
const app = express();

mongoose.connect(process.env.MONGODB_URI)
    .then(() =>
        console.log("connected to database")
    )
    .catch((e) =>
        console.log("Error:",e)
    );

app.use(express.json())
app.use(jobroutes);

app.listen(PORT, () => {
    console.log("app running on port no " + PORT);
});
