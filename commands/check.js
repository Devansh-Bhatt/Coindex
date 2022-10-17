const CryptoAPI = require('../lib/Crypto-API');
const Keymanager = require('../lib/keymanager');


const check = {
    async price(cmd){
        try {
            keymanager = new Keymanager();
            const key = keymanager.getKey();
            cryptoAPI = new CryptoAPI(key);
            const priceOutput = await cryptoAPI.Getdata(cmd.coin,cmd.curr);
            console.log(priceOutput);
        } catch (error) {
            console.log(error.message.red);
        }
        
    }
}

module.exports = check;