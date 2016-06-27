hrApp.controller("MathController",function($scope){
  console.log("controller");
  $scope.calculate = function(){
    console.log("function call");
    $scope.r1=$scope.a+$scope.b;
    $scope.r2=$scope.a-$scope.b;
    $scope.r3=$scope.a*$scope.b;
    $scope.r4=$scope.a/$scope.b;
  }
});
