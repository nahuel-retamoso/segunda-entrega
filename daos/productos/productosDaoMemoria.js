const ContenedorMemoria = require('../containers/contenedorMemoria.js');

class ProductosDaoMemoria {
    constructor() {
        this.contenedor = new ContenedorMemoria();
    }

    async save(producto) {
        return this.contenedor.save(producto);
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

module.exports = ProductosDaoMemoria;