
// main app javascript file


// alert("in app.js file..............");


'use strict';

angular.module('contactapp', ['ngResource']).
		
  config(['$routeProvider', function($routeProvider) {
  $routeProvider.
      when('/dashboard', {template: 'assets/angular/templates/dashboard/index.html', controller: DashboardController}).
      when('/posts', {template: 'assets/angular/templates/posts/index.html', controller: PostIndexController}).
      when('/posts/new', {template: 'assets/angular/templates/posts/new.html', controller: PostCreateController}).
      when('/posts/:post_id', {template: 'assets/angular/templates/posts/detail.html', controller: PostDetailController}).
      when('/posts/edit/:post_id', {template: 'assets/angular/templates/posts/edit.html', controller: PostEditController}).
      when('/tasks', {template: 'assets/angular/templates/tasks/index.html', controller: TaskIndexController}).
      when('/tasks/new', {template: 'assets/angular/templates/tasks/new.html', controller: TaskCreateController}).
      when('/tasks/edit/:task_id', {template: 'assets/angular/templates/tasks/edit.html', controller: TaskEditController}).
      when('/tasks/:task_id', {template: 'assets/angular/templates/tasks/detail.html', controller: TaskDetailController}).
      when('/tasks/subtasks/:id', {template: 'assets/angular/templates/subtasks/index.html', controller: SubTaskIndexController}).
      when('/tasks/subtasks/edit/:id', {template: 'assets/angular/templates/subtasks/edit.html', controller: SubTaskEditController}).
      otherwise({redirectTo: '/dashboard'});      
      
}]);




