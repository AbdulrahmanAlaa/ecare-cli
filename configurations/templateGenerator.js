const fs = require('fs');

/**
 * 
 * @param {*} scope holds the template object to be bound with the handle parse 
 * @param {*} sourcePath 
 */
module.exports.createFromTemplate = function (scope, sourcePath) {
   
    // Read source template00
    console.log(` in create template function createFromTemplate:${__dirname}/templates/${sourcePath}/template.js`)
    const source = fs.readFileSync(join(`${__dirname}/templates/${sourcePath}/template.js`), 'utf-8');

    // Convert to Handlebars template and add the scope
    const template = handlebars.compile(source);
    const html = template(scope);
    return html;
}