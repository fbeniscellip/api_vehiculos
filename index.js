
const express = require("express");
const app = express();
const cors = require("cors");
const puerto = 2006;
//----------------------------------------------------

const { getVehiculos , getVehiculosById } = require("./Controllers/vehiculos_const");
const { vehiculos } = require("./vehiculos");

app.use(cors());

app.get("/" , getVehiculos)

app.get("/:id" , getVehiculosById)

//----------------------------------------------------


app.listen( puerto , ()=> {
    
    console.log(`Servidor arriba ok en el puerto ${puerto}`);
});

function getVehiculos(done) {

    const result = fetch("https://api-vehiculos-lj3j.onrender.com/");

    result
        .then(response => response.json())
        .then(data => {
            done(data)
        });

}

getVehiculos(data => {

    data.result.array.forEach(vehiculos => {

        const article = document.createRange().createContextualFragment(/*html*/`
        <article>
             <div class="image-container">
             

                <img src="https://api-vehiculos-lj3j.onrender.com/" alt="vehiculo">

            </div>

                    <h2>vehiculo</h2>
                    <span>estado de personaje</span>


        </article>
        
    `);

    const main = document.querySelector("main");

    main.append(article);



    });



});
