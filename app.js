const dotenv = require("dotenv").config("./.env")
const express = require("express");
require("./connection_string/mongo_connection")
const router = require("./routes/routes")


const app = express();
app.use(express.json());
app.use(router)

app.listen(3000, ()=>console.log("Started at port 3000"))
