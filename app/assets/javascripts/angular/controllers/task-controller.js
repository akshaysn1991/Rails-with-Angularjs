


// alert('in task controller');
'use strict';
function TaskIndexController($scope, $http, $location, $routeParams, Tasks) {  	
  // alert('inside  Taskindex controllerrrrrrrrrrr');
  $scope.tasks = Tasks.index();
  // $scope.tasks = Tasks.index({id:$routeParams.PostId}); 
  
  // $scope.date = new Date();

  // $scope.subTaskFilter = function (location) {
  //       return location.parent_id == $scope.$routeParams.PostId;
  //   };

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
        $location.path('/tasks');

        alert("Task Deleted!");
        
                
       };
  
};
TaskIndexController.$inject = ['$scope', '$http', '$location', '$routeParams', 'Tasks'];




function TaskCreateController($scope, $http, $location, $routeParams, Tasks) {    
   alert('in TaskCreateController controllerrrrrrrrrrr');
  $scope.tasks = Tasks.index();   
  alert($routeParams.PostId);
  
     $scope.addTask = function() {
    var newTask = {
     task_name: $scope.TaskName,
     project: $scope.Project,
     task_type: $scope.TaskType,
     eta_hrs: $scope.ETAHours,
     actual_hrs: $scope.ActualHours,
     status: $scope.Status,
     parent_id: $routeParams.PostId
      
      
    };
  
    var nt = new Tasks({ task: newTask });
    
    nt.$create(function() {
      $scope.tasks.push(nt);
      // now that the contact is saved, clear the form data
      $scope.TaskName = "";
      $scope.Project = "";
      $scope.TaskType = "";
      $scope.ETAHours = "";
      $scope.ActualHours = "";
      $scope.PostId = "";
      
      //redirect
      // $location.path("/#/posts");
        })
    alert("Task Saved!");
    $location.path('/tasks');
    }
        
};
TaskCreateController.$inject = ['$scope', '$http', '$location', '$routeParams', 'Tasks'];



function TaskEditController($scope, $http, $location, $routeParams, Tasks) {    
   alert('in PostEditController controllerrrrrrrrrrr');
  $scope.tasks = Tasks.index();   
    
$scope.task = Tasks.get( {task_id: $routeParams.task_id} ); 
     
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
      url: "/tasks/" + $routeParams.task_id,
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
TaskEditController.$inject = ['$scope', '$http', '$location', '$routeParams', 'Tasks'];
