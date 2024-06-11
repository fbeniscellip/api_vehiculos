const { request , response } = require("express");
const { vehiculos } = require("../vehiculos");

const getVehiculos = ( req , res )=> {    
    return res.json({
        ok:true,
        statusCode:200,
        vehiculos
    });
}

const getVehiculosById = ( req = request , res = response )=> {    
    
    let id = parseInt(req.params.id);

    let VehiculosABuscar = "";

    VehiculosABuscar = vehiculos.find(( vehiculos )=> {
        return vehiculos.id === id;
    });

    if(VehiculosABuscar){
        return res.json({
            ok:true,
            statusCode:200,
            VehiculosABuscar
        });
    }else{
        return res.json({
            ok:true,
            statusCode:404,
            msg:"No hay vehiculos con ese id"
        });
    }

}

module.exports = {
    getVehiculos,
    getVehiculosById
}