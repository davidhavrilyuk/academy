var bookmarksApp = angular.module("bookmarksApp", ['ngRoute'])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/add',
            {
            templateUrl: 'views/addForm.html',
            controller: 'addFormCtrl'
            }
        );
}]);


