// The controller
app.controller('filterCtrl', ['$scope', 'terms', function ($scope, terms) {
  $scope.items = terms;
}]);