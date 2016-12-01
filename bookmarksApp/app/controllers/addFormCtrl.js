bookmarksApp.controller("addFormCtrl", function($scope){
    $scope.addBookmark = function(name, url, desc) {
        if (name != "" && url != "" && desc != "") {
            $scope.list.bookmarks.push({
                id: ($scope.list.bookmarks.length == 0) ? 1 : $scope.list.bookmarks[$scope.list.bookmarks.length - 1].id + 1,
                name: name,
                url: url,
                description: desc
            })
        }
    };
});