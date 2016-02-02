// alert('in post controller');
'use strict';
function ExtraFunctionsController($scope, $http, $location, $routeParams, Tasks) {  	
  // alert('in postlist controllerrrrrrrrrrr');
  // $scope.tasks123 = Tasks.index(({id:$routeParams.id}));
  $scope.tasks123 = Tasks.show_subtasks({action:'show_subtasks'});     
    	    
 
        
};
ExtraFunctionsController.$inject = ['$scope', '$http', '$location', '$routeParams', 'Tasks'];
