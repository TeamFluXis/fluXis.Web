import Responses from "../utils/Response";
import APIUtils from "../utils/ApiUtils";
import Router from "../utils/Router";

export default class Map {
    public static async GetMap(req: any, res: any): Promise<void> {
        try {
            const mapData = await APIUtils.exec("/map/" + req.params.id);
            if (mapData.title == null) {
                return Router.get404(req, res);
            }

            return Responses.Send(req, res, "map", "map", {
                mapid: req.params.id,
                map: mapData,
                title : mapData.title + " - " + mapData.artist
            });
        } catch (ex) {
            console.log(ex);
        }
    }
}