import Server from "./Server";
const config = require('./../config/config.json');

class Main {
    public static async main():Promise<void> {
        new Server(config.port);
    }
}

Main.main();