import mongoose, { Schema } from "mongoose";

const esquemae = new Schema({
    name: String,
    apepat: String,
    apemat: String,
    noEm: Number,
    Salario: Number
});

export const modeloEm = new model("TablaEmpleados", esquemaEmpleados);

