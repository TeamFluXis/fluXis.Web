import API from "../Api";
import ApiResponse from "../ApiResponse";

export default class ApiMaps {
    public static async GET(req: any, res: any): Promise<void> {
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
}