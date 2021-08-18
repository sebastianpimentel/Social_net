//librerias y modulos
const express = require("express"); 
const cors = require("cors");
const { dbConnection } = require("./db/db");

const User= require("./routes/user")
const Post=require("./routes/post")
const Auth=require("./routes/auth")

require("dotenv").config();

const app=express();
app.use(cors());
app.use(express.json())
app.use("/api/user",User)
app.use("/api/post",Post)
app.use("/api/auth",Auth)

app.listen(
    process.env.PORT,
    ()=>console.log("Backend server running an port ",process.env.PORT)
)
dbConnection();