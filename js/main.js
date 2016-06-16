 var app = angular.module('main', ['ngMessages']);


app.controller('contact_us',['$scope','$http', function($scope, $http) {
$scope.form = { 
          "name" : "",
          "email_1" : "",
          "email_2" : "",
         "numb" : ""
      };
    $scope.reset_form = function() { 
      $scope.form.name="";
      $scope.form.email_1="";
      $scope.form.email_2="";
      $scope.form.numb="";
      $scope.form.userForm.$setUntouched();
    };
    
$scope.send = function () {
     $scope.reset_form();
  alert("Thank you.");
};
    
    
    
    
}]);


app.controller('one_two_three_four__section',['$scope','$http', function($scope, $http) {

    $scope.item = {};
    
    $http.get('data/one.json').success (function(data){
				$scope.item = data.item;
			}); 
    
    
    $scope.select = function (section){
    $http.get('data/'+section+'.json').success (function(data){
				$scope.item = data.item;
			}); 
        
    };
}]);