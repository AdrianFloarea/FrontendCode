var app=angular.module('app',['ngRoute']);

app.config(function($routeProvider){
    $routeProvider
        .when('/forms',{
            templateUrl:'views/form.html',
            controller:'FormsController'
        })
        .when('/colors',{
            templateUrl:'views/colors.html',
            controller:'ColorsController'
        })
        .otherwise({
            redirectTo:'/'
        });
})