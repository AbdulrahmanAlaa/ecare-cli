(function(){
    'use strict';

    angular
        .module('{{module.name}}', [
            {{module.dependencies}}
        ]);

}());