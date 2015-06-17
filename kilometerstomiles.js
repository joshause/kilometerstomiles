(function() {

  'use strict';

  var KilometersToMiles = function() {};

  KilometersToMiles.prototype.get = function(x) {
    if(typeof x !== "number") {
      return 'invalid input';
    } else {
      return x * 0.621371;
    }
  };

  if (typeof exports !== 'undefined') {
    if (typeof module !== 'undefined' && module.exports) {
      exports = module.exports = KilometersToMiles;
    } else {
      exports.KilometersToMiles = KilometersToMiles;
    }
  } else {
    window.KilometersToMiles = KilometersToMiles;
  }

})();
