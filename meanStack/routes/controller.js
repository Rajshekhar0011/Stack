/**
 * http://usejsdoc.org/
 */
(function(){
	angular.module('meanStack',['ui.router'])
	
	.config(function($stateProvider){
		
		$stateProvider
		.state('signUp',{
			
		url:"/signup",
		templateUrl:"frontend/signup.html",
		controller:"SignUpController"
		
		
		})
		
		
	})
}());