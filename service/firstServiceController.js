/**
 * Created by Dedrick Kitamuka on 04/04/2017.
 */

/**
 * This controller belongs to the myControllerModule,
 * it is there to call notify every time the button will
 * be pressed form the view
 **/


var controllerModule = angular.module('myControllerModule', []);

controllerModule.controller('MyController', ['$scope', 'notify', function($scope, notify) {
  $scope.putToken = function(tkn) {
    notify(tkn);
  };
}]);
