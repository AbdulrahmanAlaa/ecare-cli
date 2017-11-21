(function () {
    'use strict';

    angular
        .module ('{{directive.moduleName}}')
        .directive ('{{directive.name}}', {{directive.name}});


    /** @ngInject */
    function {{directive.name}}() {

        function {{directive.name}}Controller(){
          
        }

        function {{directive.name}}Link(){

        }

        return {
            bindToController: true,
            controller: {{directive.name}}Controller,
            controllerAs: 'vm',
            link: {{directive.name}}Link,
            restrict: 'AE',
            scope: {},
        }
    }

} ());