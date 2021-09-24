const express = require('express');
const cors = require('cors');

class Server {
    
    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        this.usuariosPath = '/api/usuarios';

        /* Middelwares */
        this.middelwares();

        /* Rutas de mi aplicacion */

        this.routes();
    }

    middelwares() {
        /* Cors */
        this.app.use( cors() )

        /* Lectura y parseo del body */
        this.app.use(express.json());

        /* Directorio public */
        this.app.use(express.static('public'));
    }

    routes() {
        this.app.use(this.usuariosPath, require('../routes/usuarios'));
    }

    listen(){
        this.app.listen(this.port, () => {
            console.log(`Server started on ${this.port}`);
        }); 
    }
}

module.exports = Server;