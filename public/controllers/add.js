angular.module('MyApp')
  .controller('AddCtrl', function($scope, $alert, Movie) {
    $scope.addMovie = function() {
      Movie.save({ movieUrl: $scope.movieUrl }).$promise
        .then(function() {
          $scope.movieUrl = '';
          $scope.addForm.$setPristine();
          $alert({
            content: 'We have received the URL. It will be added after verification.',
            animation: 'fadeZoomFadeDown',
            type: 'material',
            duration: 3
          });
        })
        .catch(function(response) {
          $scope.movieUrl = '';
          $scope.addForm.$setPristine();
          $alert({
            content: response.data.message,
            animation: 'fadeZoomFadeDown',
            type: 'material',
            duration: 3
          });
        });
    };
  });