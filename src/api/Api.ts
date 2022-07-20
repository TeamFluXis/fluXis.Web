import * as mysql from "mysql";
import { sleep } from "../utils/AsyncUtils";
const config = require('./../../config/config.json');

export default class API {
    public static async executeQuery(query: string):Promise<Array<any>> {
        var con = mysql.createConnection({
            host: config.dbHost,
            user: config.dbUser,
            password: config.dbPassword,
            database: config.dbName
        });

        var res: Array<any> = [];
        var done = false;

        con.connect(function (err) {
            if (err) throw err;

            con.query(query, function (err, result) {
                if (err) throw err;
                res = result;
                done = true;
                con.end();
            });
        });
        while (!done) {
            await sleep(1);
        }
        return res;
    }
}