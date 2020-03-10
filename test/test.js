'use strict';

const assert = require('assert');
const dc = require('../');

describe('#effectiveDamage()', () => {

  it('正常なダメージ計算ができる', () => {
    assert.equal(dc.effectiveDamage(100, 50, 30), 83);
  });

  it('負の異常値におけるダメージ計算ができる', () => {
    assert.equal(dc.effectiveDamage(-1, 0, 0), 0);
    assert.equal(dc.effectiveDamage(0, -1, 0), 0);
    assert.equal(dc.effectiveDamage(0, 0, -1), 0);
  });

  it('2000より大きい異常値におけるダメージ計算ができる', () => {
    assert.equal(dc.effectiveDamage(2001, 0, 0), 2000);
    assert.equal(dc.effectiveDamage(300, 2150, 0), 14);
    assert.equal(dc.effectiveDamage(300, 2000, 2001), 300);
  });
})
