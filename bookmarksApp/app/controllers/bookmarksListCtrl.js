bookmarksApp.controller("bookmarksListCtrl", function($scope) {

    $scope.deleteBookmark = function(id) {
        for(var i in $scope.list.bookmarks) {
            if ($scope.list.bookmarks[i].id == id) {
                $scope.list.bookmarks.splice(i, 1);
            }
        }
    };

    $scope.tableRowHover = function(e) {
        (e.type == "mouseover") ? this.tableRowHoverClass = "warning" : this.tableRowHoverClass = "";
    };
});