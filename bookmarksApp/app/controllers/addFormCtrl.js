bookmarksApp.controller("addFormCtrl", function($scope){
    $scope.addBookmark = function(newBookmark, addForm) {
        if (addForm.$valid) {
            $scope.list.bookmarks.push({
                id: ($scope.list.bookmarks.length == 0) ? 1 : $scope.list.bookmarks[$scope.list.bookmarks.length - 1].id + 1,
                name: newBookmark.name,
                url: newBookmark.url,
                description: newBookmark.description
            })
        }
    };
});