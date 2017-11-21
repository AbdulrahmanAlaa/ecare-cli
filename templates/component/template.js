(function () {
    'use strict';

    angular
        .module ('{{component.moduleName}}')
        .component ('{{component.name}}', {{component.name}}());


    function {{component.name}}() {

        function {{component.name}}Controller(){
            var vm = this;
            
        }

        return {
            bindings: {},
            controller: {{component.moduleName}}Controller,
            controllerAs: 'vm'
        }
    }

} ());