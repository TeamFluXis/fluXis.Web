import * as express from "express";
import ApiResponse from "./ApiResponse";
import ApiMaps from "./routes/ApiMaps";

export default class ApiRouter {
    public static init(): express.Router { 
        const router: express.Router = express.Router();

        router.route('/maps').get(ApiMaps.GET);
        router.route("*").get(ApiResponse.send404);

        return router;
    }
}