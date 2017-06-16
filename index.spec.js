import fyMap from '.';

describe('fyMap', () => {
  it('doesn\'t affect the return order', () => {
    const array = Array.from(Array(12).keys());;
    const callback = jest.fn((val, index) => index);

    expect(fyMap(array, callback)).toEqual(array);
  });

  it('calls back the right number of times', () => {
    const array = Array(50);
    const callback = jest.fn((val, index) => index);

    fyMap(array, callback);
    expect(callback).toHaveBeenCalledTimes(array.length);
  });
});
