import mongose from "mongose";
import dotenv from "dotenv";
import express from "express";
import cors from "cors";

dotenv.config(); 

mongoose.connect(process.env.url_db) 
  .then(() => {
    console.log("estoy en funcionamiento");  
  })
  .catch((err) => {
    console.error("Lo sinto, no funciono xd:", err); 
  });

const app= express ();
app.use(cors())
app.listen(4000,()=>{
  console.log("Servidor activo en el 4000")
});

  