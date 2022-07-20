import * as express from "express";
import Charts from "../pages/Charts";

import Map from "../pages/Map";
import Responses from "./Response";

export default class Router {
    public static init(): express.Router {
        const router: express.Router = express.Router();

        router.route('/').get((req: any, res: any) => {
            return Responses.Send(req, res, "home", "home", {});
        });

        router.route('/about').get((req: any, res: any) => {
            return Responses.Send(req, res, "about", "about", {});
        });

        router.route('/charts').get(Charts.GET);

        router.route('/map').get(this.get404);
        router.route('/map/:id').get(Map.GetMap);

        router.route('/user').get(this.get404);
        router.route('/user/:id').get(this.get404);

        router.route('/ranks').get(this.get404);

        router.route('*').get(this.get404);

        return router;
    }

    public static async get404(req: any, res: any): Promise<void> {
        return Responses.Send(req, res, "404", "404 Not Found", {});
    }
}