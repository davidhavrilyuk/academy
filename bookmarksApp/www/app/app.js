var bookmarksApp = angular.module("bookmarksApp", ['ngRoute'])
    .config(function ($routeProvider) {
        $routeProvider.when('/add',
            {
            templateUrl: 'views/addForm.html',
            controller: 'addFormCtrl'
            }
        );

        $routeProvider.when('/list',
            {
                templateUrl: 'views/bookmarksList.html',
                controller: 'bookmarksListCtrl'
            }
        );

        $routeProvider.when('/home',
            {
                templateUrl: 'views/index.html',
                controller: 'indexCtrl'
            }
        );

        $routeProvider.otherwise({redirectTo: "/home"});
});


