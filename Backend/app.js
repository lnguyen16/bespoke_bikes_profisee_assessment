const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/bike-routes");
const cors = require('cors');
const app = express();

//Middlewares
// Express.json will convert all the middlewares
// This converts all the data to the json
app.use(express.json());
app.use(cors());

app.use("/bikes", router);  //localhost:5000/bikes 

mongoose.connect("mongodb+srv://bespoke:bespoke123@cluster0.pgpw2.mongodb.net/?retryWrites=true&w=majority"
).then(()=>console.log("Connected To The Database"))
    .then(() => {
        app.listen(5000)
    })
    .catch((err)=>console.log(err));