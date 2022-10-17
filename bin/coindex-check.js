const program = require('commander')
const check = require('../commands/check')

program
    .command('price')
    .description('Get real time price of coin')
    .option('--coin <type>','Add specific coin types','BTC,ETH,XRP')
    .option('--curr <currency>','Change the Currency','INR')
    .action((cmd)=>check.price(cmd))

program.parse(process.argv)
    