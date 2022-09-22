const Contenedor = require('../containers/contenedorArchivo.js');
const config = require('../../config.js').db.filesystem.productos;

class ProductosDaoArchivo {
    constructor() {
        this.contenedor = new Contenedor(config);
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

module.exports = ProductosDaoArchivo;
