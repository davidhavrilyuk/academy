bookmarksApp.controller("indexCtrl", function($scope) {
    $scope.list = model;

    /*bookmarksApp style*/
    $scope.headerClass = "info";
    $scope.tableRowClass = "active";

    /*jqLite*/
    var el = angular.element(document.querySelector("body"));
    el.addClass("classFromJqLite");
});