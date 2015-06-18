# kilometerstomiles.js

JavaScript conversion of kilometers to miles.

[![Build Status](https://travis-ci.org/joshause/kilometerstomiles.svg?branch=master)](https://travis-ci.org/joshause/kilometerstomiles)
[![MIT license](http://img.shields.io/badge/license-MIT-brightgreen.svg)](http://opensource.org/licenses/MIT)

## Usage

### Node.js

```js
var KilometersToMiles = require("kilometerstomiles");
var ktm = new KilometersToMiles();
ktm.get(1);
// => 0.621371
```

### Browser

(Add necessary `<script>` tag reference to `kilometerstomiles.js`)

```js
// KilometersToMiles is autoloaded to window.KilometersToMiles
var ktm = new MilesToKilometers();
ktm.get(1);
// => 0.621371
```

## Tests

```bash
$ jasmine
```

## License

MIT. By [Josh Ause](http://www.github.com/joshause).
