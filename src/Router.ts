import * as express from "express";
import Charts from "./pages/charts/Charts";

import Home from "./pages/home/Home";
import Map from "./pages/map/Map";

export default class Router {
    public static InitializeRouter(app: express.Application): express.Router { 
        const router: express.Router = express.Router();

        router.route('/').get(Home.GET);
        router.route('/charts').get(Charts.GET);
        router.route('/map/:id').get(Map.GetMap);

        return router;
    }
}