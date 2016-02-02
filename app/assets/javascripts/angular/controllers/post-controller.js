// alert('in post controller');
'use strict';
function PostIndexController($scope, $http, $location, $routeParams, Posts) {  	
  // alert('in postlist controllerrrrrrrrrrr');
  $scope.posts = Posts.index(); 
  
$scope.post = "";
      
  $scope.getPost = function() {
      
     
     $scope.post = this.post;    
          
   
  }
      
    
    
    $scope.removePost = function() {
        //alert($(this).siblings("#detailButton").attr("href"));
        //$scope.contact = Contacts.get( {contact_id: this.$("#contactToDelete")} ); 
        $scope.post.$destroy();
        $('#deleteModal').modal('hide')

        alert("Post Deleted!")
        
        $location.path('/posts');        
       };


};


PostIndexController.$inject = ['$scope', '$http', '$location', '$routeParams', 'Posts'];


function PostCreateController($scope, $http, $location, $routeParams, Posts) {  	
  // alert('in PostCreateController controllerrrrrrrrrrr');
  $scope.posts = Posts.index();  
  alert() 
  
     $scope.addPost = function() {
		var newContact = {

			name: $scope.newPostName,
			body: $scope.newPostBody

			
		};
 	
	 	var np = new Posts({ post: newContact });
	 	
	 	np.$create(function() {
	 		$scope.posts.push(np);
	 		// now that the contact is saved, clear the form data
	 		$scope.newPostName = "";
	 		$scope.newPostBody = "";
	 		
	 		//redirect
	 		// $location.path("/#/posts");
	    	})
	 	alert("Post Saved!");
    $location.path('/posts');
    }
        
};
PostCreateController.$inject = ['$scope', '$http', '$location', '$routeParams', 'Posts'];


function PostEditController($scope, $http, $location, $routeParams, Posts) {  	
  // alert('in PostEditController controllerrrrrrrrrrr');
  $scope.posts = Posts.index();   
    
$scope.post = Posts.get( {post_id: $routeParams.post_id} );
alert($routeParams.post_id); 
     
   $scope.updatePost = function() {
   	
   	
   	var updatedPost = {
			
			name: $scope.newPostName,
			body: $scope.newPostBody
			
		};		
		
   	
   	$.ajax({
   		url: "/posts/" + $routeParams.post_id,
   		dataType: "json",
   		type: "POST",
   		processData: false,
   		contentType: "application/json",
   		data: "{\"post\"" + ":" + 
   			"{" +
   			
   			"\"name\"" + ":" + JSON.stringify($("#edit_post_name").val()) + "," +
   			"\"body\"" + ":" + JSON.stringify($("#edit_post_body").val()) + "" +
   			
   			
   			"}}" ,
   		//data: "{\"contact\":{\"first_name\":\"Taco\"}}",
	   		beforeSend: function(xhr) 
	   		{
				xhr.setRequestHeader("X-Http-Method-Override", "PUT");
			}
   	});
	
	alert("Post Updated!");
  $location.path('/posts');


   }







  
     
};
PostEditController.$inject = ['$scope', '$http', '$location', '$routeParams', 'Posts'];



function PostDetailController($scope, $http, $location, $routeParams, Posts) {   
   alert('in postdetail controllerrrrrrrrrrr');
   $scope.posts = Posts.index(); 
   $scope.post = Posts.get( {post_id: $routeParams.post_id} );
  
  


};


PostDetailController.$inject = ['$scope', '$http', '$location', '$routeParams', 'Posts'];