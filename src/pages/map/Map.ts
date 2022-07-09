import Responses from "../../Response";
import APIUtils from "../../utils/ApiUtils";
import NotFound from "../error/NotFound";

export default class Map {
    public static async GetMap(req: any, res: any): Promise<void> {
        try {
            const mapData = await APIUtils.exec("/map/" + req.params.id);
            if (mapData.title == null) {
                return NotFound.GET(req, res);
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