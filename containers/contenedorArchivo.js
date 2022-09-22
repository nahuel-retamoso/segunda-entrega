const fs = require('fs');
const path = require('path');

class ContenedorArchivo {
    constructor(archivo) {
        this.archivo = path.join(__dirname, archivo);
    }

    async save(objeto) {
        try {
            const contenido = await this.getAll();
            objeto.id = contenido.length + 1;
            contenido.push(objeto);
            await fs.promises.writeFile(this.archivo, JSON.stringify(contenido, null, 2));
            return objeto.id;
        } catch (error) {
            console.log(error);
        }
    }

    async modifyById(id, objeto) {
        try {
            const contenido = await this.getAll();
            const index = contenido.findIndex((objeto) => objeto.id === id);
            if (index === -1) {
                return null;
            }
            contenido[index] = objeto;
            await fs.promises.writeFile(this.archivo, JSON.stringify(contenido, null, 2));
            return objeto.id;
        } catch (error) {
            console.log(error);
        }
    }

    async getById(id) {
        try {
            const contenido = await this.getAll();
            const objeto = contenido.find((objeto) => objeto.id === id);
            if (!objeto) {
                return null;
            }
            return objeto;
        } catch (error) {
            console.log(error);
        }
    }

    async getAll() {
        try {
            const contenido = await fs.promises.readFile(this.archivo, 'utf-8');
            return JSON.parse(contenido);
        } catch (error) {
            console.log(error);
        }
    }

    async deleteById(id) {
        try {
            const contenido = await this.getAll();
            const objeto = contenido.find((objeto) => objeto.id === id);
            if (!objeto) {
                return null;
            }
            const nuevoContenido = contenido.filter((objeto) => objeto.id !== id);
            await fs.promises.writeFile(this.archivo, JSON.stringify(nuevoContenido, null, 2));
            return objeto;
        } catch (error) {
            console.log(error);
        }
    }

    async deleteAll() {
        try {
            await fs.promises.writeFile(this.archivo, JSON.stringify([], null, 2));
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = ContenedorArchivo;