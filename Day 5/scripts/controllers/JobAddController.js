hrApp.controller('JobAddController', ['$scope', '$http', '$location', 'CommonResourcesFactoryBackup',
    function($scope, $http, $location, CommonResourcesFactoryBackup) {
        $scope.job = {};
        $scope.requiredErrorMessage = "Please fill out this form!";


        /**
         * Reset form
         */
        $scope.reset = function () {
            this.job = {};
        };


        $scope.create = function (addJob) {
            $http({url: CommonResourcesFactoryBackup.addJobUrl, method: 'POST', data: addJob})
                .success(function (data) {
                    $scope.job = data;
                    $location.url('/jobView/' + $scope.job.jobId);
                });
        };

    }]);