const Configstore = require('configstore');

// async ()=>{
//     const ConfigStore = await import("configStore");
//     return ConfigStore;
// };
const pkg = require('../package.json');

class Keymanager{
    constructor(){
        this.conf = new Configstore(pkg.name);
    }
    setKey(key){
        this.conf.set('apiKey',key);
        return key;
    }

    getKey(){
        const key = this.conf.get('apiKey');

        if(!key){
            throw new Error('No api key found -- Get a key at https://coinlayer.com');
        }
        return key;
    }
    deleteKey(){
        const key = this.conf.get('apiKey');

        if(!key){
            throw new Error('No api key found -- Get a key at https://coinlayer.com');
        }
        this.conf.delete('apiKey');
        return;
    }
}

module.exports = Keymanager;