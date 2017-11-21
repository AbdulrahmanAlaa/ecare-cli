var program = require('commander');
var component = require('./component');
var directive = require('./directive');
var mod = require('./module');
program
    .usage('[options] <file ...>')
    .version(require('./../package.json').version)
    .option('-c, --component <name>', 'create component',component.createComponent)
    .option('-d, --directive <name>', 'create directive',directive.createDirective)
    .option('-m, --module <name>', 'create module',mod.createModule)
    .parse(process.argv);




    
// process.on('--help', () => {
//     //Example cases
// })
// program.parse(process.argv);