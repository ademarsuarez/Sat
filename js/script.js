
var IvoSuarez = angular.module('IvoSuarez', []);
IvoSuarez.controller('Operaciones', function($scope) {
$scope.precio = 100
$scope.iva = 0.12
$scope.precio = $scope.precio
  $scope.iva = $scope.precio * $scope.iva;
}); 