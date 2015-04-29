angular.module('MyApp')
  .controller('DetailCtrl', function($scope, $rootScope, $routeParams, Movie) {
  	  console.log('DetailCtrl');
  	  console.log($routeParams.id);
      Movie.get({ _id: $routeParams.id }, function(movie) {
        $scope.movie = movie;
      });
    });