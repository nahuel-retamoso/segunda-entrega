const config = require('../../config.js').db.filesystem.carrito;
const Contenedor = require('../containers/contenedorArchivo.js');

class CarritoDaoArchivo {
    constructor() {
        this.contenedor = new Contenedor(config);
    }
   
    async save(carrito) {
        return this.contenedor.save(carrito);
    }
   
    async getById(id) {
        return this.contenedor.getById(id);
    }
   
    async getAll() {
        return this.contenedor.getAll();
    }
  
    async deleteById(id) {
        return this.contenedor.deleteById(id);
    }
  
    async deleteAll() {
        return this.contenedor.deleteAll();
    }
}

module.exports = CarritoDaoArchivo;