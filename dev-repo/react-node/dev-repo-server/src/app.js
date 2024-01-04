import express from "express";
import cors from "cors";

import routes from './routes';
import "./database";

class App {
    constructor(){
        this.server = express();    // start server
        this.middlewares(); 
        this.routes();
    }

    middlewares() {
        this.server.use(express.json());    // default responde to .json
        this.server.use(cors());    // allow external requests
    }

    routes() {
        this.server.use(routes);
    }
}

export default new App().server;