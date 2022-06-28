import Responses from "../../Response";

export default class Map {
    public static async GetMap(req: any, res: any): Promise<void> {
        try {
            return Responses.Send(req, res, "map", "Map", {
                mapid: req.params.id
            });
        } catch (ex) {
            console.log(ex);
        }
    }
}