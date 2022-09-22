const express = require('express');
const { productos, carrito } = require('./daos/index.js');
const { Router } = express

const productosRouter = new Router()
const carritoRouter = new Router()

productosRouter.use(express.json())
productosRouter.use(express.urlencoded({ extended: true }))

carritoRouter.use(express.json())
carritoRouter.use(express.urlencoded({ extended: true }))

const app = express()
app.use(express.static('public'))
app.use('/api/productos', productosRouter)
app.use('/api/carrito', carritoRouter)

productosRouter.get('/:id', (req, res) => {
    res.json(productos.getById(req.params.id))
}   )

carritoRouter.get('/:id', (req, res) => {
    res.json(carrito.getById(req.params.id))
}   )

const PORT = 8080
const server = app.listen(PORT, () => {
    console.log(`Servidor http escuchando en el puerto ${server.address().port}`);
});