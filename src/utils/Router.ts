import * as express from "express";
import Charts from "../pages/charts/Charts";

import Home from "../pages/home/Home";
import Map from "../pages/map/Map";
import NotFound from "../pages/error/NotFound";

export default class Router {
    public static InitializeRouter(): express.Router {
        const router: express.Router = express.Router();

        router.route('/').get(Home.GET);

        router.route('/charts').get(Charts.GET);

        router.route('/map').get(NotFound.GET);
        router.route('/map/:id').get(Map.GetMap);

        router.route('/user').get(NotFound.GET);
        router.route('/user/:id').get(NotFound.GET);

        router.route('/ranks').get(NotFound.GET);

        return router;
    }
}