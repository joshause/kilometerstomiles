# kilometerstomiles.js

JavaScript conversion of kilometers to miles.

## Usage

### Node.js

```js
var KilometersToMiles = require("./kilometerstomiles");
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
