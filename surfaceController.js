angular.module('surface', [])
  .controller('SurfaceController', function SurfaceController() {
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
  });