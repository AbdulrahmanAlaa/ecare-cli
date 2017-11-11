var program = require('commander');
var component = require('./component');
var directive = require('./directive');
var mod = require('./module');
program
    .usage('[options] <file ...>')
    .version(require('./../package.json').version)
    // .option('-c <name>, --component <name>', 'create component')
    .option('-c, --component <name>', 'create component',component.createComponent)
    .option('-d, --directive <name>', 'create directive',directive.createDirective)
    .option('-m, --module <name>', 'create module',mod.createModule)
    //.option('-c, --cheese [type]', 'Add the specified type of cheese [marble]', 'marble')
    .parse(process.argv);

    // console.log(component.createComponent())
// process.on('--help', () => {
//     //Example cases
// })
// program.parse(process.argv);