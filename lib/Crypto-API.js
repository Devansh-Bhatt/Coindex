const axios = require('axios');
const colors = require('colors');

class CryptoAPI{
    constructor(apiKey){
        this.apiKey = apiKey;
        this.baseURL = 'http://api.coinlayer.com/api/live';
    }

    async Getdata(coinOpt,curOpt){
        try {
            var res = await axios.get(`${this.baseURL}?access_key=${this.apiKey}&symbols=${coinOpt}&target=${curOpt}`);
            //res = JSON.parse(res);
            res = Object.entries(res.data.rates);
            let output = '';
            res.map((coin)=>{
                output+=`Coin: ${coin[0].green} | Rates: ${colors.yellow(coin[1])}\n`;
            })
            
            return output;
        } catch (error) {
            console.log(error.message.red);
        }
    }

}

module.exports = CryptoAPI;