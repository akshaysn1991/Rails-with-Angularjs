// alert('in post controller');
'use strict';
function DashboardController($scope, $http, $location, $routeParams, Users, Tasks) {  	
  // alert('in postlist controllerrrrrrrrrrr');
  $scope.users = Users.index(); 
  $scope.tasks123 = Tasks.show_subtasks({action:'show_subtasks'});      
    	    
  $scope.date = new Date();
        
};
DashboardController.$inject = ['$scope', '$http', '$location', '$routeParams', 'Users', 'Tasks'];
