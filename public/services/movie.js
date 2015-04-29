angular.module('MyApp')
  .factory('Movie', function($resource) {
  	console.log('Movie factory');
    return $resource('/api/movies/:_id');
  });