var program = require('commander');
var component = require('./component');
var directive = require('./directive');
var module = require('./module');
program
    .version(require('./../package.json').version)
    .option('-c, --component', 'create component').action(component.createComponent)
    .option('-d, --directive', 'create directive').action(directive.createDirective)
    .option('-m, --module', 'create module').action(module.createDirective)
    //.option('-c, --cheese [type]', 'Add the specified type of cheese [marble]', 'marble')
    .parse(process.argv);
process.on('--help', () => {
    //Example cases
})
program.parse(process.argv);