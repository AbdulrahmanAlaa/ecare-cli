#!/usr/bin/env node
const argv = require('yargs').argv
const fs = require('fs');
const handlebars = require('handlebars');
const { join } = require('path');


const data = {
    mycompany: {
        name: 'GASCO',
    },

};


// Read source template
const source = fs.readFileSync(join(`${__dirname}/template.js`), 'utf-8');

// Convert to Handlebars template and add the data
const template = handlebars.compile(source);
const html = template(data);

console.log(html);
//GetCommand(argv.module);

function CreateModule(command) {
    var path = './modules/' + command + '/';
    fs.mkdirSync(path);
    fs.writeFileSync(path + command + '.module.js');
    fs.writeFileSync(path + command + '.controller.js');
    fs.writeFileSync(path + command + '.route.js');
    fs.writeFileSync(path + command + '.service.js');
    fs.writeFileSync(path + command + '.data.js');
}
