hrApp.controller('JobEditController', ['$scope', '$http', '$routeParams', '$location', 'CommonResourcesFactoryBackup',
    function ($scope, $http, $routeParams, $location, CommonResourcesFactoryBackup) {
        $scope.requiredErrorMessage = "Please fill out this form!";


        /**
         * Reset form
         */
        $scope.reset = function () {
            $scope.job = {};
        };

        $scope.findOneJob=function(){
            $http({url:CommonResourcesFactoryBackup.findOneJobUrl, method:'GET'})
                .success(function(data){
                    $scope.job=data;
                })
        }
        /**
         * Persist an employee
         * @param addEmployee - employee to be persisted
         */
        $scope.create = function (addJob) {
            $http({url: CommonResourcesFactoryBackup.editJobUrl, method: 'PUT', data: addJob})
                .success(function (data) {
                    $scope.job = data;
                    $location.url('/jobView/' + $scope.job.jobId);
                });
        };
        
    }]);