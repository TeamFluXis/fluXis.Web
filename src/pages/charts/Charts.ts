import Responses from "../../Response";

export default class Charts {
    public static async GET(req: any, res: any): Promise<void> {
        try {
            return Responses.Send(req, res, "charts", "Charts", {});
        } catch (ex) {
            console.log(ex);
        }
    }
}