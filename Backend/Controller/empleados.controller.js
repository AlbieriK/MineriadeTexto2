import { modeloE } from "../Models/empleado.models.js";

modeloE.create({
    name:"Juanito",
    apepat: "Ramirez",
    apemat:"Lopez",
    noEm:123456667,
    Salario:4444,
});

export const test =()=>{
    console.log("llamando al controlador")
}

 

