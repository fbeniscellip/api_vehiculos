
const express = require("express");
const app = express();
const cors = require("cors");
const puerto = 2006;
//----------------------------------------------------

const { getVehiculos , getVehiculosById } = require("./Controllers/vehiculos_const")

app.use(cors());

app.get("/" , getVehiculos)

app.get("/:id" , getVehiculosById)

//----------------------------------------------------


app.listen( puerto , ()=> {
    
    console.log(`Servidor arriba ok en el puerto ${puerto}`);
});