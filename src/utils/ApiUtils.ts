const axios = require('axios').default;
const config = require('../config/config.json');

export default class APIUtils {
    public static async exec(q: string): Promise<any> {
        const res = await axios.get(config.apiUrlBase + q);
        return res.data;
    } 
}