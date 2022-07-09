import * as express from "express";
import ApiResponse from "./ApiResponse";
import ApiMaps from "./routes/ApiMaps";

export default class ApiRouter {
    public static init(): express.Router { 
        const router: express.Router = express.Router();

        //maps
        router.route('/maps').get(ApiMaps.getMaps);
        router.route('/map/:id').get(ApiMaps.getMap);
        
        // users
        router.route('/user/:id').get(ApiResponse.send404);

        // 404
        router.route("*").get(ApiResponse.send404);

        return router;
    }
}