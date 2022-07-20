import express from "express";
import ApiRouter from "./api/ApiRouter";
import Router from "./utils/Router";

export default class Server {
    public port: Number;
    public server: express.Application;

    /**
     * @param p The Server port 
     */
    constructor(p: Number) {
        this.port = p;
        this.server = express();
        this.initServer();
    }

    private initServer() {
        this.server.use("/assets", express.static(__dirname + "/assets"));
        this.server.use("/", Router.init());
        this.server.use("/api", ApiRouter.init());
        this.server.disable('x-powered-by');
        this.server.set("view engine", "twig");
        this.server.listen(this.port, () => {
            console.log("Server started, listening on port " + this.port)
        });
    }
}