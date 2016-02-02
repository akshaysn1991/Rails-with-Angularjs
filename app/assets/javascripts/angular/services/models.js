var servicesModule = angular.module('contactapp');

servicesModule.factory('Posts', function($resource) {		
		// alert('in servies');
		var ContactsService = $resource('/posts/:post_id', {post_id: '@id'}, {
			'create'  : { method: 'POST' },
			'index'   : { method: 'GET', isArray: true },			
			'update'  : { method: 'PUT' },
			'destroy' : { method: 'DELETE' }
		});
		return ContactsService;
});


servicesModule.factory('Users', function($resource) {		
		// alert('in servies');
		var ContactsService = $resource('/users/:user_id', {users_id: '@id'}, {
			'create'  : { method: 'POST' },
			'index'   : { method: 'GET', isArray: true },			
			'update'  : { method: 'PUT' },
			'destroy' : {method: 'DELETE' }
		});
		return ContactsService;
});


servicesModule.factory('Tasks', function($resource) {		
		// alert('in servies');
		var ContactsService = $resource('/tasks/:task_id', {task_id: '@id'}, {
			'create'  : { method: 'POST' },
			'index'   : { method: 'GET', isArray: true },			
			'update'  : { method: 'PUT' },
			'destroy' : {method: 'DELETE' },
			'show_subtasks' : { method: 'GET', action: 'show_subtasks', isArray: true }
		});
		return ContactsService;
});

// servicesModule.factory('Tasks123', function($resource) {		
// 		// alert('in servies');
// 		var ContactsService = $resource('/tasks/:task_id', {task_id: '@id'}, {
// 			'create'  : { method: 'POST' },
// 			'index'   : { method: 'GET', isArray: true },			
// 			'update'  : { method: 'PUT' },
// 			'destroy' : {method: 'DELETE' },
// 			'show_subtasks' : { method: 'GET', action: 'show_subtasks', isArray: true }
// 		});
// 		return ContactsService;
// });