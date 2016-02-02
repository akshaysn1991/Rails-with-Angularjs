


// alert('in task controller');
'use strict';
function SubTaskIndexController($scope, $http, $location, $routeParams, Tasks) {  	
  // alert('inside  Taskindex controllerrrrrrrrrrr');
  // $scope.tasks = Tasks.index();
  // $scope.tasks123 = Tasks.show_subtasks({action:'show_subtasks'});
  alert($routeParams.id);
   $scope.tasks = Tasks.index({id:$routeParams.id}); 
  
  // $scope.date = new Date();
$scope.task = "";
      
  $scope.getTask = function() {
      
     
     $scope.task = this.task;    
          
   
  }
      
    
    
    $scope.removeTask = function() {
      alert('hi...........');
        //alert($(this).siblings("#detailButton").attr("href"));
        //$scope.contact = Contacts.get( {contact_id: this.$("#contactToDelete")} ); 
        $scope.task.$destroy();
        $('#deleteModal').modal('hide')

        alert("Task Deleted!");
        
        $location.path('/tasks');        
       };

 
  
};
SubTaskIndexController.$inject = ['$scope', '$http', '$location', '$routeParams', 'Tasks'];



function SubTaskEditController($scope, $http, $location, $routeParams, Tasks) {    
   alert('in SubtaskEditController controllerrrrrrrrrrr');
  // $scope.tasks = Tasks.index({id:$routeParams.id});   
    
$scope.task = Tasks.get( {task_id: $routeParams.id}); 
     
   $scope.updateTask = function() {
    
    
    var updatedTask = {
      
     task_name: $scope.TaskName,
     project: $scope.Project,
     task_type: $scope.TaskType,
     eta_hrs: $scope.ETAHours,
     actual_hrs: $scope.ActualHours,
     status: $scope.Status
      
    };    
    
    
    $.ajax({
      url: "/tasks/" + $routeParams.id,
      dataType: "json",
      type: "POST",
      processData: false,
      contentType: "application/json",
      data: "{\"task\"" + ":" + 
        "{" +
        
        "\"task_name\"" + ":" + JSON.stringify($("#edit_task_name").val()) + "," +
        "\"project\"" + ":" + JSON.stringify($("#edit_project").val()) + "," +
        "\"task_type\"" + ":" + JSON.stringify($("#edit_task_type").val()) + "," +
        "\"eta_hrs\"" + ":" + JSON.stringify($("#edit_eta_hrs").val()) + "," +
        "\"actual_hrs\"" + ":" + JSON.stringify($("#edit_actual_hrs").val()) + "," +
        "\"status\"" + ":" + JSON.stringify($("#edit_status").val()) + "" +
        
        
        "}}" ,
      //data: "{\"contact\":{\"first_name\":\"Taco\"}}",
        beforeSend: function(xhr) 
        {
        xhr.setRequestHeader("X-Http-Method-Override", "PUT");
      }
    });
  
  alert("Task Updated!");
  $location.path('/tasks');


   }
    
};
SubTaskEditController.$inject = ['$scope', '$http', '$location', '$routeParams', 'Tasks'];

function TaskDetailController($scope, $http, $location, $routeParams, Tasks) {   
   alert('in postdetail controllerrrrrrrrrrr');
   $scope.tasks = Tasks.index(); 
   $scope.task = Tasks.get( {task_id: $routeParams.task_id} );
  
  


};


TaskDetailController.$inject = ['$scope', '$http', '$location', '$routeParams', 'Tasks'];