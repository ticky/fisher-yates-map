# Fisher-Yates Map

[![npm](https://img.shields.io/npm/v/fisher-yates-map.svg?maxAge=2592000)](https://www.npmjs.com/package/fisher-yates-map) ![fisher-yates-map](https://img.shields.io/npm/l/fisher-yates-map.svg?maxAge=2592000) [![Build Status](https://travis-ci.org/ticky/fisher-yates-map.svg?branch=master)](https://travis-ci.org/ticky/fisher-yates-map) [![codecov](https://codecov.io/gh/ticky/fisher-yates-map/branch/master/graph/badge.svg)](https://codecov.io/gh/ticky/fisher-yates-map)

A map implementation which calls the callback for each element in a random order

## Usage

`fyMap` is a simple map function which accepts an array and a callback;

```js
import fyMap from 'fisher-yates-map';

const myArray = ['meow', 'purr', 'nya'];

const output = fyMap(myArray, (item, index, array) => {
  console.log(`cat ${index + 1} ${item}s!`);
  return `${item}~!`;
});
// => 'cat 2 purrs!'
// => 'cat 1 meows!'
// => 'cat 3 nyas!'

console.log(output);
// => ['meow~!', 'purr~!', 'nya~!']
```

The output will be the same as calling the equivalent built-in `Array.prototype.map` method, however, each item will be sent to the callback in a random order.

### With Babel Function Bind

If you're using [`babel-plugin-transform-function-bind`](http://babeljs.io/docs/plugins/transform-function-bind/), you can also call `fyMap` with an alternate syntax;

```js
const output = myArray::fyMap((item, index, array) => {
  console.log(`cat ${index + 1} ${item}s!`);
  return `${item}~!`;
});
```

More information about this syntax extension can be found [on Babel's website](http://babeljs.io/docs/plugins/transform-function-bind/).

## Why?

This could be useful in situations where the order of operations doesn't matter, or you want to enforce that per-item operations not rely on prior results. It could also be useful if you have a large number of operations which you'd like to scatter the application of.

## Caveats

`fyMap` doesn't implement the standard `Array.prototype.map` handling of `this`. If that doesn't work for you, you should probably use something else!

Performance is also imperfect - if you need something as fast as `Array.prototype.map` or a traditional loop, this isn't it.
