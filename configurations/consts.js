var isWin = /^win/.test(process.platform);

module.exports.consts = {
    "defaultBasePath":isWin? `${__dirname}/app/assets/javascript/angular/` :"/home/dev/projects/vodafone/simplicity/app/assets/javascript/angular/",
    "type":{
        "component":"component",
        "directive":"directive",
        "module":"module",
    }
}