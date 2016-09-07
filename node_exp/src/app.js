var nodeApp = angular.module('nodeApp', ['ngRoute']);

// configure our routes
nodeApp.config(function ($routeProvider) {
    $routeProvider

        // route for the home page
        .when('/', {
            templateUrl: 'views/home.html',
            controller: 'mainController'
        })

        .when('/charts', {
            templateUrl: 'views/charts.html'
        })

        .when('/tables', {
            templateUrl: 'views/tables.html'
        })

        .when('/forms', {
            templateUrl: 'views/forms.html'
        })

        .when('/bootstrapsgrid', {
            templateUrl: 'views/bootstrapsgrid.html'
        })

        .when('/bootstrapselement', {
            templateUrl: 'views/bootstrapselement.html'
        });;
});

// create the controller and inject Angular's $scope
nodeApp.controller('mainController', function ($scope) {
    // create a message to display in our view
    $scope.message = 'Everyone come and see how good I look!';
});