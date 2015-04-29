angular.module('MyApp')
  .controller('DetailCtrl', function($scope, $rootScope, $sce, $routeParams, Movie) {
  	$scope.trustSrc = function(src) {
    	return $sce.trustAsResourceUrl(src);
  	};

  	  Movie.get({ _id: $routeParams.id }, function(movie) {
        $scope.movie = movie;
      });
    });