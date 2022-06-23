import Responses from "../../Response";

export default class Home {
    public static async GET(req: any, res: any): Promise<void> {
        try {
            return Responses.Send(req, res, "home", "Home", {});
        } catch (ex) {
            console.log(ex);
        }
    }
}