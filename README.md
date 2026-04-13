# hello-world
I have a try

## detectPatternsForPatterns

```js
const { detectPatternsForPatterns } = require("./detectPatternsForPatterns");

const value = "ZCT893819";
const matched = detectPatternsForPatterns(value, [
  /^ZCT\d{6}$/,
  "/^ABC[0-9]+$/",
]);

console.log(matched); // true
```
