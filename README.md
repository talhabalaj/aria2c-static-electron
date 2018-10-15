# `aria2c-static-electron`

## Installation

This module is installed via npm:

```$ npm install aria2c-static-electron```

## Example Usage

Returns the path of a statically linked aria2c binary on the local filesystem.

```javascript
const aria2c = require('aria2c-static-electron');
console.log(aria2c.path); // c:\users\talha\project\node_modules\bin\win\x64\aria2.exe
```
Currently supports Mac OS X (64-bit), Linux (32 and 64-bit) and Windows (32 and 64-bit).

Inspired by [ffmpeg-static-electron](https://www.npmjs.com/package/ffmpeg-static-electron) by [pietrop](https://www.npmjs.com/~pietrop)