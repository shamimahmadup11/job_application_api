

const express = require("express");
const jobroutes = require("./rout/job");
const mongoose = require("mongoose");
const PORT = 4001;
const app = express();

mongoose.connect("mongodb://127.0.0.1:27017/job_app") 
    .then(() =>
        console.log("connected to database")
    )
    .catch((e) =>
        console.log(e)
    );

    app.use(express.json())
app.use(jobroutes);

app.listen(PORT, () => {
    console.log("app running on port no " + PORT);
});
