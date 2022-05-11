/* const generarNumeros = () => {
    const numeros = []
    for (let i = 1; i <= 1000; i++) {
        numeros.push(Math.round(Math.random() * 20))
    }
    return numeros
}

const numeros = generarNumeros ()

const numerosObj = {}

for (let i = 0; i < 1000 ; i++) {
    const numero = numeros[i]   
    if(!(numero in numerosObj)){
        numerosObj[numero] = 0
    }
    numerosObj[numero]++
}

console.log(numerosObj) */

/* const prods = [
    {id:1, name: 'mochila', price: 20,},
    {id:2, name: 'lapiz', price: 25,},
    {id:3, name: 'gorra', price: 28,},
    {id:4, name: 'cuaderno', price: 24,},
    {id:5, name: 'birome', price: 22,}
]

let names = prods.map( e => e.name).join(',')
console.log(names)

let prices = prods.map(e => e.price).reduce((acc, element) => {
    acc = acc + element
    return acc
}, 0)
console.log(prices)

let averagePrices = prices/prods.length
console.log(averagePrices)


let minorPriceInitial = prods[0].price

prods.forEach(e => {
    if(e.price <= minorPriceInitial){
        minorPriceInitial = e.price
    }  
})
console.log(minorPriceInitial)

let mayorPriceInitial = prods[0].price

prods.forEach(e => {
    if(e.price >= mayorPriceInitial){
        mayorPriceInitial = e.price
    }  
})
console.log(mayorPriceInitial)

let objeto = {
    names,
    prices,
    averagePrices,
    minorPriceInitial,
    mayorPriceInitial
}
console.log(objeto)

let nm = 57/1.5
console.log(nm) */

/* const moment = require('moment')

let today = moment()
let born = moment('28-07-1992', 'DD-MM-YYYY')
let diffYears = today.diff(born, 'years')
let diffDays = today.diff(born, 'days')

let msj = (
`Hoy es ${today.format('DD-MM-YYYY')};
Nací el ${born.format('DD-MM-YYYY')};
Mi edad es ${diffYears} años;
La cantidad de días desde mi nacimiento es ${diffDays} días`)

console.log(msj) */

/* const http = require('http');
const moment = require('moment');

console.log(http)

const server = http.createServer((peticion, respuesta) => {
    
    let horaActual = (new Date()).getHours()
    
    let msj

    if(horaActual >= 6 && horaActual <= 12)
    {msj = (`<h1>Buenos días</h1>`)}
    else if(horaActual >= 12 && horaActual <= 19)
    {msj = (`<h1>Buenas tardes</h1>`)}
    else
    {msj = (`<h1>Buenas noches</h1>`)}

    respuesta.end(msj)


})

const conectedServer = server.listen(8080,() => {

    console.log(`Servidor http escuchando en puerto ${conectedServer.address().port}`)

})
 */
/* const express = require('express')

const app = express()

const PORT = 8080

app.get('', (req, res) =>{
    res.send('Hola Mundo')
})
app.get('/productos', (req, res) =>{
    res.send('Endpoint de productos')
})
app.get('/visitas', (req, res) =>{
    res.send('Endpoint de visitas')
})

const server = app.listen(PORT, () => 
console.log(`Servidor corriendo en puerto ${PORT}`)
)
server.on('error', (error) => console.log(`Error en servidor ${error}`)) */

/* const express = require('express')
const moment = require('moment')

const app = express()

const PORT = 8080

app.get('/', (req, res) =>{
    res.send(`<h1 style="color:blue" >BIENVENIDOS AL SERVIDOR EXPRESS</h1>`)
})

let count = 0

app.get('/visitas', (req, res) =>{
    count +=1 
    res.send(`LA CANTIDAD DE VISITAS ES ${count}`)
})
app.get('/fyh', (req, res) =>{
    let fyh = moment().format('MMMM DD YYYY, h:mm:ss a')
    res.send(`{fyh: ${fyh}}`)
})

const server = app.listen(PORT, () => 
console.log(`Servidor corriendo en puerto ${PORT}`)
)
server.on('error', (error) => console.log(`Error en servidor ${error}`)) */

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