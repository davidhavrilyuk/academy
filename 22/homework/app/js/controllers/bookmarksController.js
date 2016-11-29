var bookmarksApp = angular.module("bookmarksApp", []);

bookmarksApp.controller("bookmarksCtrl", function($scope) {
   $scope.list = model;

   $scope.addBookmark = function(name, url, desc) {
       if (name != "" && url != "" && desc != "") {
           $scope.list.bookmarks.push({
               id: $scope.list.bookmarks.length + 1,
               name: name,
               url: url,
               description: desc
           })
       }
   };

   $scope.deleteBookmark = function(id) {
       for(var i in $scope.list.bookmarks) {
           if ($scope.list.bookmarks[i].id == id) {
               $scope.list.bookmarks.splice(i, 1);
           }
       }
   }


});