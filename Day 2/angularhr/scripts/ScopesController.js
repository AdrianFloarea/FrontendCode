hrApp.controller('ScopesController',['$scope',function($scope){
    $scope.title='Two way Binding Demo';
    $scope.childtemplate='templates/chidlscope.html';
    $scope.resetFirstVariable = function () {
        $scope.firstVariable=undefined;
    }
    $scope.setFirstVariable=function(val){
        $scope.firstVariable=val;
    }
}])