'use strict';
 
angular.module('myApp.addPost', ['ngRoute'])
 
.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/addPost', {
        templateUrl: 'addPost/addPost.html',
        controller: 'AddPostCtrl'
    });
}])
 
.controller('AddPostCtrl', ['$scope', function($scope) {
 	$scope.AddPost = function() {
    	var title = $scope.article.title;
		var post = $scope.article.post;
      // Add Post logic will be here
 
    }
}]);