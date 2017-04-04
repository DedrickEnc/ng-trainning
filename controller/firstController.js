/**
 * Created by Dedrick Kitamuka on 23/03/2017.
 */

/**
 * The controller is there to augment the scope, because we are using a controller for two reasons
 * 1. Adding property to the scope
 * 2. Adding behaviors to the scope
 **/

/**
 * This controller adds a property greeting to the scope,
 * and this property can be accessed from the DOM element controlled
 * by this controller
 *
 * It adds a behavior to the scope by adding a method
 **/

var myApp = angular.module('myApp',[]);

// inline creation of a controller
myApp.controller('GreetingController', ['$scope', function($scope) {
  $scope.greeting = 'Hola!!! This is our first controller!';
  $scope.double = function(value) { return value * 2; };
}]);