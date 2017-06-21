/* global describe, it, expect, jest */
import fisherYatesMap from '.';

describe('fisherYatesMap', () => {
  it('doesn\'t affect the return order', () => {
    const array = Array.from(Array(12).keys());
    const callback = jest.fn((val) => val);

    expect(fisherYatesMap(array, callback)).toEqual(array);
  });

  it('calls back the right number of times', () => {
    const array = Array(50);
    const callback = jest.fn((val, index) => index);

    fisherYatesMap(array, callback);
    expect(callback).toHaveBeenCalledTimes(array.length);
  });

  it('can be called using the Babel bind syntax as well', () => {
    const array = Array.from(Array(12).keys());
    const callback = jest.fn((val) => val);

    expect(array::fisherYatesMap(callback)).toEqual(array);
  });
});
