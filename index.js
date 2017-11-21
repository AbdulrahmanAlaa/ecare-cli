#!/usr/bin/env node
const fs = require('fs');
const handlebars = require('handlebars');
const { join } = require('path');
/** handles all the use commands */
const commands = require('./configurations/commands.js');


// console.log(html);
//GetCommand(argv.module);

// function CreateModule(command) {
//     var path = './modules/' + command + '/';
//     fs.mkdirSync(path);
//     fs.writeFileSync(path + command + '.module.js');
//     fs.writeFileSync(path + command + '.controller.js');
//     fs.writeFileSync(path + command + '.route.js');
//     fs.writeFileSync(path + command + '.service.js');
//     fs.writeFileSync(path + command + '.data.js');
// }
