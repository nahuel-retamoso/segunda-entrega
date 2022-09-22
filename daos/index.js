switch (process.env.DB) {
    case 'filesystem':
        const ProductosDaoArchivo = require('./daos/productos/productosDaoArchivo.js');
        const CarritoDaoArchivo = require('./daos/carrito/carritoDaoArchivo.js');
        module.exports = {
            productos: new ProductosDaoArchivo(),
            carrito: new CarritoDaoArchivo()
        }
        break;
    case 'mongoDB':
        const ProductosDaoMongo = require('./daos/productos/productosDaoMongo.js');
        const CarritoDaoMongo = require('./daos/carrito/carritoDaoMongo.js');
        module.exports = {
            productos: new ProductosDaoMongo(),
            carrito: new CarritoDaoMongo()
        }
        break;
    case 'memoria':
        const ProductosDaoMemoria = require('./daos/productos/productosDaoMemoria.js');
        const CarritoDaoMemoria = require('./daos/carrito/carritoDaoMemoria.js');
        module.exports = {
            productos: new ProductosDaoMemoria(),
            carrito: new CarritoDaoMemoria()
        }
        break;
    default:
        console.log('No se ha definido un tipo de base de datos');
        break;
}