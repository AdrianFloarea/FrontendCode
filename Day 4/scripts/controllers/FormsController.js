app.controller('FormsController',function($scope){
    $scope.clickButton=function(){
        if($scope.myForm.input.$valid==true){
            alert("Datele sunt valide!");
        }
    }
})