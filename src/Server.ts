import express from "express";
import Router from "./Router";

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
        this.server.use("/", Router.InitializeRouter(this.server));
        this.server.use("/api", require(__dirname + "/api/api.ts"));
        this.server.use("/static", express.static(__dirname + "/static"));
        this.server.disable('x-powered-by');
        this.server.set("view engine", "twig");
        this.server.listen(this.port, () => console.log("Server started, listening on port " + this.port));
    }
}