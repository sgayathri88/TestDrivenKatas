const { expect } = require('chai');
const twoSum = require('./twoSum');

describe('twoSum', () => {
  it('Returns empty array if target is zero', () => {
    expect(twoSum([1, 2, 3], 0)).to.deep.equal([]);
  });

  it('Returns empty array if array length is less than 2', () => {
    expect(twoSum([1], 7)).to.deep.equal([]);
  });

  it('Returns array with correct indices for elements that add up to target', () => {
    expect(twoSum([1, 2], 3)).to.deep.equal([0, 1]);
    expect(twoSum([1, 2, 4], 5)).to.deep.equal([0, 2]);
    expect(twoSum([1, 2, 4], 6)).to.deep.equal([1, 2]);
    expect(twoSum([1, 2, 3, 4, 5, 6, 8, 10], 10)).to.deep.equal([1, 6]);
    expect(twoSum([1, 2, 3, 4, 5, 6, 8, 10], 50)).to.deep.equal([]);
  });
});
