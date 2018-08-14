const { expect } = require('chai');
const wrap = require('./wrap');

describe('wrap', () => {
  it('Returns empty string if empty string was provided', () => {
    expect(wrap("", 10)).to.equal("");
  });

  it('Returns string if string is less than colNum', () => {
    expect(wrap('Hi', 10)).to.equal('Hi');
  });

  it('Returns appropriately-columned strings if string is greater than colNum', () => {
    expect(wrap('Hello Hello Hello', 5)).to.equal('Hello\nHello\nHello');
  });

  it('Returns appropriately-columned strings if complex string is greater than colNum', () => {
    expect(wrap('Lorem ipsum dolor sit eu amet, elit na magna sem amet nulla vel purus ac ligula.', 20)).to.equal('Lorem ipsum dolor\nsit eu amet, elit na\nmagna sem amet nulla\nvel purus ac ligula.');
  });
});
