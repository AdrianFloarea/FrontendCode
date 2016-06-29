hrApp.controller('EmployeeEditController', ['$scope', '$http', '$routeParams', '$location', 'CommonResourcesFactoryBackup',
    function ($scope, $http, $routeParams, $location, CommonResourcesFactoryBackup) {
        $scope.requiredErrorMessage = "Please fill out this form!";
        $scope.patternDateNotRespectedMessage = "The date format should be yyyy-mm-dd";
        $scope.patternCommisionNotRespectedMessage = "Commission should be in the format 0.XX";

        //TODO #HR5
        $scope.departments={};
        $scope.managers={};
        $scope.jobs={};


        $http({url: CommonResourcesFactoryBackup.findAllDepartmentsUrl,method: 'GET'})
            .success(function(data){
                $scope.departments=data;
            });
        $http({url: CommonResourcesFactoryBackup.findAllJobsUrl,method: 'GET'})
            .success(function(data){
                $scope.jobs=data;
            });
        $http({url: CommonResourcesFactoryBackup.findAllEmployeesUrl,method: 'GET'})
            .success(function(data){
                $scope.managers=data;
            });
        /**
         * Reset form
         */
        $scope.reset = function () {
            $scope.employee = {};
        };

        $scope.findOneEmployee=function(){
            $http({url:CommonResourcesFactoryBackup.findOneEmployeeUrl, method:'GET'})
                .success(function(data){
                    $scope.employee=data;
                })
        }
        /**
         * Persist an employee
         * @param addEmployee - employee to be persisted
         */
        $scope.create = function (addEmployee) {
            $http({url: CommonResourcesFactoryBackup.editEmployeeUrl, method: 'PUT', data: addEmployee})
                .success(function (data) {
                    $scope.employee = data;
                    $location.url('/employeeView/' + $scope.employee.employeeId);
                });
        };

        $scope.datePattern = /^\d{4}-\d{2}-\d{2}$/;
        $scope.commissionPattern =  /^[0]\.\d{1}(\d)?$/;

    }]);