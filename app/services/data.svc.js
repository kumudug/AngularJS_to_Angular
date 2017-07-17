(function () {
    'use strict';

    angular
        .module('mainApp')
        .factory('dataSvc', dataSvc);

    dataSvc.$inject = ['$q', '$timeout'];

    function dataSvc($q, $timeout) {
        var service = {
            getData: _getData
        };

        return service;

        function _getData() {
            var deferred = $q.defer();
            $timeout(function(){
                deferred.resolve([
                    {
                        name: 'name1',
                        number: '01'
                    },
                    {
                        name: 'name2',
                        number: '02'
                    },
                    {
                        name: 'name3',
                        number: '03'
                    },
                    {
                        name: 'name4',
                        number: '04'
                    },
                    {
                        name: 'name5',
                        number: '05'
                    }
                ]);
            }, 1000);
            return deferred.promise;
        }
    }
})();