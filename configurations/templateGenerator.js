/**
 * 
 * @param {*} scope holds the template object to be bound with the handle parse 
 * @param {*} sourcePath 
 */
module.exports.createFromTemplate = function (scope, sourcePath) {
    // const data = {
    //     mycompany: {
    //         name: 'GASCO',
    //     },
    // };

    // Read source template00
    const source = fs.readFileSync(join(`${__dirname}/templates/${sourcePath}/template.js`), 'utf-8');

    // Convert to Handlebars template and add the scope
    const template = handlebars.compile(source);
    const html = template(scope);
    return html;
}