const Contenedor = require('../containers/contenedorMemoria.js');

class CarritoDaoMemoria {
    constructor() {
        this.contenedor = new Contenedor();
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

module.exports = CarritoDaoMemoria;