bookmarksApp.controller("indexCtrl", function($scope, $http) {

    $http.get("model/bookmarksModel.php").success(function (data) {
        $scope.list = data;
    });

    /*bookmarksApp style*/
    $scope.headerClass = "info";
    $scope.tableRowClass = "active";

    /*jqLite*/
    var el = angular.element(document.querySelector("body"));
    el.addClass("classFromJqLite");

});