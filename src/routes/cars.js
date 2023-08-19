const {Router} = require('express');

const carsArray = [];

const cars = (app) => {
    const route = Router();

    app.use('/api/cars', route);

    route.post('/', (req, res)=>{
        const newcar = req.body;

        carsArray.push(newcar);

        return res.json({
            success: true,
            message: 'Carro agregado correctamente'
        });
    });

    route.get('/', (req, res)=>{
        return res.json({
            "carros": carsArray
        })
    });
}

module.exports = cars