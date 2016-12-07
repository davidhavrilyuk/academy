bookmarksApp.controller("indexCtrl", function($scope, $http) {

    $http.get("bookmarks.json").success(function (data) {
        $scope.list = data;
    });

    /*bookmarksApp style*/
    $scope.headerClass = "info";
    $scope.tableRowClass = "active";

    /*jqLite*/
    var el = angular.element(document.querySelector("body"));
    el.addClass("classFromJqLite");

});