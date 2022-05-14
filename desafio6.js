//Import fs y express
const fs = require('fs')
const express = require('express')
const Contenedor = require('./desafio4')

//Invocando express
const app = express()
//Selección de puerto 8080
const PORT = 8080

let prods = new Contenedor('products.txt')

app.get("/productos", (req,res)=>{
    async function getAll(){
      try{
          let products = await prods.getAll()
          showProducts = JSON.stringify(products, null, 2)
          res.send(`<div>
                      <h1>Los prodcutos dentro del contenedor son:</h1>
                    </div>
                    <div>
                      <ul>
                          <li><h4>${showProducts}</h4></li>
                      </ul>
                    </div>`)
      }
      catch(err){
        throw (`${err} No se pudieron cargar los productos`)
      }  
    }    
getAll()
})


app.get('/', (req, res) =>{
    res.send(`<h1 style="color:blue" >BIENVENIDOS AL SERVIDOR EXPRESS</h1>`)
})


app.get('/productoRandom', (req, res) =>{
    async function randomNumbers (){
        try{
            let products = await prods.getAll()
            let randomNumber = Math.floor(Math.random() * ((products.length+1) - 1)) + 1
            let randomProd = await prods.getById(randomNumber)
                randomProd = JSON.stringify(randomProd, null, 2)

            res.send(`<div>
                        <h1>El producto elegido al azar es:</h1>
                      </div>
                      <div>
                        <ul>
                            <li><h4>${randomProd}</h4></li>
                        </ul>
                      </div>`)
        }
        catch(err){
            throw (`${err} No se pudo traer el producto random`)
      }
}
randomNumbers()

}) 
/* app.get("/productoRandom", (req,res)=>{
    async function getRandom(){
      try{
        let products = await prods.getAll();
        let random = Math.floor(Math.random() * ((products.length+1) - 1)) + 1
        let ptoRandom = await prods.getById(random);
        ptoRandom = JSON.stringify(ptoRandom, null, 2);
        res.send(`Este es un producto random entre los guardados actualmente: <br><br> ${ptoRandom} <br><br> <a href="../">Volver al Index</a>`);
      }
      catch(error){
        throw Error("Error en pto random");
      }
      
    };
    getRandom();
  }) */

const server = app.listen(PORT, () => 
console.log(`Servidor corriendo en puerto ${PORT}`)
)
server.on('error', (error) => console.log(`Error en servidor ${error}`))
