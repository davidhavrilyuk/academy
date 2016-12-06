bookmarksApp.controller("indexCtrl", function($scope, $http) {

    $http.get("bookmarks.json").success(function (data, status, headers,config) {
        $scope.list = data;
        console.log(data);
        console.log(status);
        console.log(headers);
        console.log(config);
    });

    /*bookmarksApp style*/
    $scope.headerClass = "info";
    $scope.tableRowClass = "active";

    /*jqLite*/
    var el = angular.element(document.querySelector("body"));
    el.addClass("classFromJqLite");

});