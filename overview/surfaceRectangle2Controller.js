//A controller as an angular tool, must be defined inside a module
//Un contoller etant un outil angular, doit etre definie dans un module


// An angular module declaration without dependency
var surfaceModule = angular.module('surface', []);

//creating a controller from a module
surfaceModule.controller('SurfaceController', SurfaceController);

//function representing a controller
function SurfaceController() {
  //this is the scope object, all property and functions tailed to it
  //will be available/accessible from the view.
  
  this.L = 1;
  this.l = 2;
  this.unit = 'M2';
  this.unites = ['M2', 'CM2', 'MM2'];
  this.meterToOtherUnits = { M2: 1, CM2: 100, MM2: 1000};

  this.surface = function surface(outUnit) {
    return this.convertUnit(this.L * this.l, this.unit, outUnit);
  };
  this.convertUnit = function convertUnit(surface, inUnit, outUnit) {
    return surface * this.meterToOtherUnits[outUnit] / this.meterToOtherUnits[inUnit];
  };
  this.calculate = function calculate() {
    window.alert('Congratulation!');
  };
}

