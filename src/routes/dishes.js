const {Router} = require('express');

const dishesArray = [];

const dishes = (app) => {
    const route = Router();

    app.use('/api/dishes', route);

    route.post('/', (req, res)=>{
        const newDish = req.body;

        dishesArray.push(newDish);

        return res.json({
            success: true,
            message: 'Platillo agregado correctamente'
        });
    });

    route.get('/', (req, res)=>{
        return res.json(dishesArray)
    });

    route.put('/:indice', (req, res)=>{
        const indice = req.params.indice;
        const updateDish = req.body;

        dishesArray[Number(indice)] = updateDish

        return res.json({
            success: true,
            message: 'Platillo editado correctamente'
        });
    });

    route.delete('/:indice', (req, res)=>{
        const indice = req.params.indice;

        dishesArray.splice(indice, 1)

        return res.json({
            success: true,
            message: 'Platillo eliminado correctamente'
        });
    });
}

module.exports = dishes