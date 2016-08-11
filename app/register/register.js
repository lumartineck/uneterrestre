'use strict';
 
angular.module('myApp.register', ['ngRoute'])
 
// Declared route 
.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/register', {
        templateUrl: 'register/register.html',
        controller: 'RegisterCtrl'
    });
}])
 
// Register controller
.controller('RegisterCtrl', ['$scope', '$location', function($scope, $location) {
 	$scope.signUp = function() {
       
         if (!$scope.regForm.$invalid) {
         	var email = $scope.user.email;
         	var password = $scope.user.password;

	        console.log('Valid form submission');
	        firebase.auth().createUserWithEmailAndPassword(email, password).then(function () {
	        	console.log('success create user');
	        	console.log(arguments);
	        	//redirct to home to sign in
	        	
	        	$scope.$apply(function () {
	        		$location.path('/home');	
	        	});
	        	
	        }).catch(function(error) {
	        	console.log('errrrrror');
	        	console.log(arguments);
			  // Handle Errors here.
			  $scope.regError = true;
			  $scope.regErrorMessage = error.message;

			  console.log($scope.regErrorMessage);
			  $scope.$apply();
			  // ...
			});
	    }
       
    };
}]);