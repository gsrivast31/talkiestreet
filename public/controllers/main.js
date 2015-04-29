angular.module('MyApp')
  .controller('MainCtrl', function($scope, Movie) {
    /*$scope.alphabet = ['0-9', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J',
      'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X',
      'Y', 'Z'];*/
    $scope.genres = ['Action', 'Adventure', 'Animation', 'Children', 'Comedy',
      'Crime', 'Documentary', 'Drama', 'Family', 'Fantasy', 'Food',
      'Home and Garden', 'Horror', 'Mini-Series', 'Mystery', 'News', 'Reality',
      'Romance', 'Sci-Fi', 'Sport', 'Suspense', 'Talk Show', 'Thriller',
      'Travel'];
    $scope.languages = ['English', 'Hindi', 'French', 'Spanish', 'German',
      'Chinese'];
    $scope.headingTitle = 'Top 12 Movies';
    $scope.movies = Movie.query();
    $scope.filterByGenre = function(genre) {
      $scope.movies = Movie.query({ genre: genre });
      $scope.headingTitle = genre;
    };
    $scope.filterByLanguage = function(language) {
      $scope.movies = Movie.query({ language: language });
      $scope.headingTitle = language;
    };
    /*$scope.filterByAlphabet = function(char) {
      $scope.movies = Movie.query({ alphabet: char });
      $scope.headingTitle = char;
    };*/
  });