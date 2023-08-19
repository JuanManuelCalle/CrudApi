const  express = require('express');
//Importar rutas
const dishes = require('./routes/dishes');
const cars = require('./routes/cars')
const {port} = require('../config/index');


const app = express();

//MiddleWare configuracion //Debe ir antes de cualquier ruta
app.use(express.json())

//Usando ruta dishes
dishes(app)
cars(app);

app.listen(port, ()=>{
    console.log('Listening on: http://localhost:' + port);
})