(function(angular) {
  'use strict';
  angular.module('surface2', ['math'])
    .controller('SurfaceController', ['unitConverter', function SurfaceController(unitConverter) {
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
    }]);
})(window.angular);