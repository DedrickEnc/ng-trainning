(function(angular) {
  'use strict';

  //declaring a module without one dependency, which is math module
  var surface2Module = angular.module('surface2', ['math']);

  surface2Module.controller('SurfaceController', SurfaceController);

  //the surfaceController references unitConverter service, that is why
  //it is injected
  SurfaceController.$inject = ['unitConverter'];

 function SurfaceController(unitConverter) {
   this.L = 1;
   this.l = 2;
   this.unit = 'M2';
   this.unites = unitConverter.units;

   this.surface = function surface(outUnit) {
     return unitConverter.convert(this.L * this.l, this.unit, outUnit);
   };
   this.calculate = function calculate() {
     window.alert('Congratulation!');
   };
 }
})(window.angular);