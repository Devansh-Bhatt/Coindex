const Keymanager = require('../lib/keymanager');
const inquirer = require('inquirer');
const isRequired = require('../utils/validate');
// async ()=>{
//     const inquirer = await import("inquirer")}
const colors = require('colors');
const key = {
    async set(){
        const keymanager = new Keymanager;
        const input = await inquirer.prompt([
            {
                type: 'input',
                name: 'key',
                message: 'Enter API key'.green,
                validate: isRequired
            }
        ]);
        const key = keymanager.setKey(input.key);

        if(key){
            console.log('API key set'.blue);
        }
    },
    show(){
        try {
            const keyManager = new Keymanager;
            const key = keyManager.getKey();
            console.log('Current API key: ',key.yellow);
            return key;
        } catch (error) {
            console.log(error.message.red);
        }
       
    },
    remove(){
       try {
        const keyManager = new Keymanager;
        keyManager.deleteKey();
        console.log('Key is Deleted'.magenta);
        return;
       } catch (error) {
        console.log(error.message.red);
       }
    }
}

module.exports = key;