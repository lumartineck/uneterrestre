'use strict';
 
angular.module('myApp.home', ['ngRoute'])
 
// Declared route 
.config(['$routeProvider', function($routeProvider) {
	console.log($routeProvider);
    $routeProvider.when('/home', {
        templateUrl: 'home/home.html',
        controller: 'HomeCtrl'
    });
}])
 
// Home controller
.controller('HomeCtrl', ['$scope', function($scope) {
 	$scope.SignIn = function(event) {
 		event.preventDefault(); 
	    var username = $scope.user.email;
	    var password = $scope.user.password;
	     
	    firebase.auth().signInWithEmailAndPassword(username, password).then(function () {
	    	console.log('success');
	    	console.log(arguments);
	    }).catch(function(error) {
	    	console.log('error');
	    	console.log(arguments);
		  // Handle Errors here.
		  var errorCode = error.code;
		  var errorMessage = error.message;
		  // ...
		});
	}
}]);