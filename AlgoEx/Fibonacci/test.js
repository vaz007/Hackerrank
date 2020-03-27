const fibonacciLinear = require('./index');

test('fibonacciLinear function is defined', () => {
  expect(typeof fibonacciLinear).toEqual('function');
});

test('calculates correct fibonacciLinear value for 1', () => {
  expect(fibonacciLinear(1)).toEqual(1);
});

test('calculates correct fibonacciLinear value for 2', () => {
  expect(fibonacciLinear(2)).toEqual(1);
});

test('calculates correct fibonacciLinear value for 3', () => {
  expect(fibonacciLinear(3)).toEqual(2);
});

test('calculates correct fibonacciLinear value for 4', () => {
  expect(fibonacciLinear(4)).toEqual(3);
});

test('calculates correct fibonacciLinear value for 15', () => {
  expect(fibonacciLinear(39)).toEqual(63245986);
});