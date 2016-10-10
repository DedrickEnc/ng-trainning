(function(angular) {
  'use strict';
  angular.module('math', [])
    .factory('unitConverter', function() {
      var units = ['M2', 'CM2', 'MM2'];
      var meterToOtherUnits = {
        M2: 1,
        CM2: 100,
        MM2: 1000
      };
      var convert = function(value, inUnit, outUnit) {
        return value * meterToOtherUnits[outUnit] / meterToOtherUnits[inUnit];
      };

      return {
        units: units,
        convert: convert
      };
    });
})(window.angular);