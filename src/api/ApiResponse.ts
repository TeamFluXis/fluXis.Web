import * as express from "express";

export default class ApiResponse {
    public static send(req: any, res: express.Response, data: any) {
        res.send(data);
    }

    public static send404(req: any, res: express.Response) {
        res.send(JSON.parse('{"error": "404 Not found"}'));
    }
}