import Responses from "../../Response";
import APIUtils from "../../utils/ApiUtils";

export default class Charts {
    public static async GET(req: any, res: any): Promise<void> {
        try {
            const mapsData = await APIUtils.exec("/maps");

            return Responses.Send(req, res, "charts", "Charts", {
                maps: mapsData.maps
            });
        } catch (ex) {
            console.log(ex);
        }
    }
}