'use strict';
 
angular.module('myApp.home', ['ngRoute'])
 
// Declared route 
.config(['$routeProvider', function($routeProvider) {
	//console.log($routeProvider);
    $routeProvider.when('/home', {
        templateUrl: 'home/home.html',
        controller: 'HomeCtrl'
    });
}])

.service('CommonProp', function() {
    var user = '';
 
    return {
        getUser: function() {
            return user;
        },
        setUser: function(value) {
            user = value;
        }
    };
})
 
// Home controller
.controller('HomeCtrl', ['$scope', '$location', 'CommonProp', function($scope, $location, CommonProp) {
 	$scope.signIn = function(event) {
 		event.preventDefault(); 
	    var username = $scope.user.email;
	    var password = $scope.user.password;
	     
	    firebase.auth().signInWithEmailAndPassword(username, password).then(function () {
	    	console.log('success');
	    	console.log(arguments);
	    	CommonProp.setUser($scope.user.email);
	    	$scope.$apply(function () {
        		$location.path('/welcome');	
        	});
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