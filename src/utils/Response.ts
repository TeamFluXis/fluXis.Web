import * as express from "express";

export default class Responses {
    public static Send(req: any, res: express.Response, page: string, title: string, data: any) {
        const pageData = {
            title: title
        }

        Object.assign(pageData, data);
        res.render(page, pageData);
    }
}