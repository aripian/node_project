var nodeApp = angular.module('nodeApp', ['ngRoute']);

// configure our routes
nodeApp.config(function ($routeProvider) {
    $routeProvider

        // route for the home page
        .when('/', {
            templateUrl: 'views/home.html',
            controller: 'mainController'
        })

        // route for the about page
        .when('/charts', {
            templateUrl: 'views/charts.html',
            controller: 'aboutController'
        })

        // route for the contact page
        .when('/tables', {
            templateUrl: 'views/tables.html',
            controller: 'contactController'
        })

        .when('/forms', {
            templateUrl: 'views/forms.html',
            controller: 'contactController'
        })

        .when('/bootstrapsgrid', {
            templateUrl: 'views/bootstrapsgrid.html',
            controller: 'contactController'
        })

        .when('/bootstrapselement', {
            templateUrl: 'views/bootstrapselement.html',
            controller: 'contactController'
        });;
});

// create the controller and inject Angular's $scope
nodeApp.controller('mainController', function ($scope) {
    // create a message to display in our view
    $scope.message = 'Everyone come and see how good I look!';
});

nodeApp.controller('aboutController', function ($scope) {
    $scope.message = 'Look! I am an about page.';
});

nodeApp.controller('contactController', function ($scope) {
    $scope.message = 'Contact us! JK. This is just a demo.';
});