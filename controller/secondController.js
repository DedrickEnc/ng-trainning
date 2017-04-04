/**
 * Created by Dedrick Kitamuka on 04/04/2017.
 */

/**
 * We are creating three controllers in the cascade module,
 * notice that for the cascade module the three controller are
 * normal and there is no hierarchy between them they belong
 * to one module but their position into the view implementation can
 * influence their created scope
 **/

var cascade = angular.module('cascade', []);

cascade.controller('MainController', ['$scope', function($scope) {
  $scope.timeOfDay = 'morning';
  $scope.name = 'Dedrick';
}]);

cascade.controller('ChildController', ['$scope', function($scope) {
  $scope.name = 'Heriston';
}]);

cascade.controller('GrandChildController', ['$scope', function($scope) {
  $scope.timeOfDay = 'evening';
  $scope.name = 'Darnovich';
}]);