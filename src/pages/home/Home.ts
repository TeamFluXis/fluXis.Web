import Responses from "../../Response";

export default class Home {
    public static async GET(req: any, res: any): Promise<void> {
        try {
            return Responses.Send(req, res, "home", "home", {});
        } catch (ex) {
            console.log(ex);
        }
    }
}