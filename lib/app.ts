import * as express from "express";
import * as bodyParser from "body-parser";
import { Routes } from "./routes/Routes";
import * as mongoose from "mongoose";

class App {
    
    public mongoUrl: string = 'mongodb://localhost/acheiDB';  
    public app: express.Application;
    public routePrv: Routes = new Routes();

    constructor() {
        this.mongoSetup();
        this.app = express();
        this.config();    
        this.routePrv.routes(this.app);    
    }

    private config(): void{
        // support application/json type post data
        this.app.use(bodyParser.json());
        //support application/x-www-form-urlencoded post data
        this.app.use(bodyParser.urlencoded({ extended: false }));
        this.app.use((req, res, next) => {
            res.append('Access-Control-Allow-Origin', '*');
            res.append('Access-Control-Allow-Methods', ['GET', 'OPTIONS', 'PUT', 'POST']);
            res.append('Access-Control-Allow-Headers',
                'Origin, X-Requested-With, Content-Type, Accept');
            next();
        });
    }
    private mongoSetup(): void{
        (<any>mongoose).Promise = global.Promise;
        mongoose.connect(this.mongoUrl);    
    }
}

export default new App().app;