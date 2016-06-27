hrApp.controller('MenuController',['$scope',function($scope){
    $scope.demoActionList=[
        {
            label: "OtherScope",
            url: "/Day%202/angularhr/views/childscope.html"
        },
        {
          label:"Math",
          url:"/Day%202/angularhr/views/demomath.html"
        }
    ];
}])
