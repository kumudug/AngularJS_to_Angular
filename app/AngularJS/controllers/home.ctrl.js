(function() {
    'use strict';

    angular
        .module('mainApp')
        .controller('homeCtrl', homeCtrl);

    homeCtrl.$inject = ['$log', 'dataSvc'];

    function homeCtrl($log, dataSvc) {
        /* jshint validthis:true */
        var vm = this;

        vm.data = dataSvc.getData().then(
            function (data) {
                $log.log(JSON.stringify(data));
                vm.data = data;
            },
            function rejected(reason) {
                $log.error(reason);
            },
            function notify(update) {
                $log.info(update);
            }
        );
    }
})();