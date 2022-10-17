const program = require('commander');
const key = require('../commands/keys')

program
    .command('set')
    .description('Set API Keys')
    .action(key.set);

program
    .command('show')
    .description('Show API Keys')
    .action(key.show);
program
    .command('remove')
    .description('remove API Keys')
    .action(key.remove);
program.parse(process.argv);