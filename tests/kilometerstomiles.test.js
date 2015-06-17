(function() {

  'use strict';

  var KilometersToMiles = require('../kilometerstomiles.js');

  describe('kilometerstomiles.js', function() {

    it('is a thing', function() {
      expect(KilometersToMiles).toBeDefined();
    });

    describe('.get()', function() {

      it('returns number of miles for number of kilometers given', function() {

        var ktm = new KilometersToMiles();
        var input = 1;
        var output = 0.621371;

        expect(
          ktm.get(input)
        ).toEqual(
          output
        );

      });

    });

  });

})();
