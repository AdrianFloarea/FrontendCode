app.controller('ColorsController',function($scope){
    $scope.colorClass;
    $scope.colors = [
        {
            "text" : "muted",
            "class": "text-muted"
        },
        {
            "text" : "primary",
            "class": "text-primary"
        },
        {
            "text" : "success",
            "class": "text-success"
        },
        {
            "text" : "info",
            "class": "text-info"
        },
        {
            "text" : "warning",
            "class": "text-warning"
        },
        {
            "text" : "danger",
            "class": "text-danger"
        }
    ];
    $scope.changeColor=function(){
        $scope.colorClass=$scope.selectedColor.class;
    }
})

