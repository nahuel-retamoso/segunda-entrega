module.exports = {
    db: {
        filesystem: {
            productos: {
                path: './data/productos.txt',
            },
            carrito: {
                path: './data/carrito.txt',
            },
        },
        mongoDB: {
            productos: {
                url: 'mongodb://localhost:27017',
                dbName: 'ecommerce',
                collection: 'productos',
            },
            carrito: {
                url: 'mongodb://localhost:27017',
                dbName: 'ecommerce',
                collection: 'carrito',
            },
        },
        sqlite3: {
            productos: {
                path: './data/productos.sqlite3',
            },
            carrito: {
                path: './data/carrito.sqlite3',
            },
        },
        mariaDB: {
            productos: {
                host: 'localhost',
                user: 'root',
                password: 'root',
                database: 'ecommerce',
                table: 'productos',
            },
            carrito: {
                host: 'localhost',
                user: 'root',
                password: 'root',
                database: 'ecommerce',
                table: 'carrito',
            },
        },
    },
};