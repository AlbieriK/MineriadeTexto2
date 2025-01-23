import mongoose from "mongoose";  
import dotenv from "dotenv";
import express from "express";
import cors from "cors";

dotenv.config();



mongoose.connect(process.env.url_db)
  .then(() => {
    console.log("estoy en funcionamiento");  
  })
  .catch((err) => {
    console.error("Lo siento, no funcionó xd:", err); 
  });

const app = express();
app.use(cors());
app.listen(4002, () => {
  console.log("servidor activo");
});


  