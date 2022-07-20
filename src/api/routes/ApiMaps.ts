import API from "../Api";
import ApiResponse from "../ApiResponse";

export default class ApiMaps {
    public static async getMaps(req: any, res: any): Promise<void> {
        try {
            await API.executeQuery("SELECT * FROM maps").then((result: any) => {
                var maps = {
                    maps: result
                };
                ApiResponse.send(req, res, maps);
            });
        } catch (ex) {
            console.log(ex);
        }
    }

    public static async getMap(req: any, res: any): Promise<void> {
        try {
            var id = parseInt(req.params.id);

            if (isNaN(id)) {
                ApiResponse.send404(req, res);
                return;
            }

            await API.executeQuery("SELECT * FROM maps WHERE `mapid` = " + id).then((result: any) => {
                ApiResponse.send(req, res, result[0]);
            });
        } catch (ex) {
            console.log(ex);
        }
    }
}