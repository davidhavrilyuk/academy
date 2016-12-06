var bookmarksApp = angular.module("bookmarksApp", ["ngRoute"]).config(function ($routeProvider) {
    $routeProvider.when('/add', {
        templateUrl:'views/addForm.html',
        controller:'addFormCtrl'
    });
});


