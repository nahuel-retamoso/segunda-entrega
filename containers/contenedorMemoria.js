class ContenedorMemoria {
    constructor() {
        this.productos = [];
    }

    async save(producto) {
        const id = this.productos.length + 1;
        const productoConId = { ...producto, id };
        this.productos.push(productoConId);
        return id;
    }

    async modifyById(id, producto) {
        const index = this.productos.findIndex((producto) => producto.id === id);
        if (index === -1) {
            return null;
        }
        this.productos[index] = producto;
        return id;
    }

    async getById(id) {
        return this.productos.find((producto) => producto.id === id);
    }

    async getAll() {
        return this.productos;
    }

    async deleteById(id) {
        const producto = this.productos.find((producto) => producto.id === id);
        if (producto) {
            this.productos = this.productos.filter((producto) => producto.id !== id);
            return producto;
        }
        return null;
    }

    async deleteAll() {
        this.productos = [];
    }
}

module.exports = ContenedorMemoria;

