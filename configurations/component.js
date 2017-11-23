const fs = require('fs');
var consts = require('./../configurations/consts.js').consts;
const createFromTemplate = require('./templateGenerator').createFromTemplate;
function createComponent(name) {
    consts.defaultBasePath
    var path = consts.defaultBasePath + '/components/' + name + '/';
    fs.mkdirSync(path);
    /** get required compiled template */
    let component = { moduleName: name, name };
   var compiledTemp =  createFromTemplate(component, consts.type.component);
    fs.writeFileSync(path + name + '.controller.js',compiledTemp);
    fs.writeFileSync(path + name + '.html',compiledTemp);
}

module.exports = {
    createComponent
};