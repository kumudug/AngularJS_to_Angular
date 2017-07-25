(function() {
    'use strict';

    angular
        .module('mainApp')
        .controller('homeCtrl', homeCtrl);

    homeCtrl.$inject = ['$log', 'dataSvc'];

    function homeCtrl($log:any, dataSvc:any) {
        /* jshint validthis:true */
        var vm = this;

        vm.hero = {
            id: 1,
            name: 'hero1'
        };

        vm.onDelete = function(event:any){
            console.log(event);
        }

        vm.data = dataSvc.getData().then(
            function (data:any) {
                $log.log(JSON.stringify(data));
                vm.data = data;
            },
            function rejected(reason:any) {
                $log.error(reason);
            },
            function notify(update:any) {
                $log.info(update);
            }
        );
    }
})();