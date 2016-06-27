hrApp.controller('UserController',function($location,$scope){
  $scope.back=function(){
    $location.url('/');
  }

  $scope.reset=function(){
    $scope.firstName=undefined;
    $scope.lastName=undefined;
    $scope.mail=undefined;
    $scope.phone=undefined;
    $scope.hireDate=undefined;
    $scope.job=undefined;
    $scope.salary=undefined;
    $scope.comission=undefined;
    $scope.manager=undefined;
    $scope.department=undefined;
  }
});
