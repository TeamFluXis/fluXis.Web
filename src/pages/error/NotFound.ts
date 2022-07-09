import Responses from "../../Response";

export default class NotFound {
    public static async GET(req: any, res: any): Promise<void> {
        try {
            return Responses.Send(req, res, "404", "404 Not Found", {});
        } catch (ex) {
            console.log(ex);
        }
    }
}