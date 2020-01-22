import { expect } from 'chai'
import { add2 } from '../src/add2'

describe('add2', () => {
  it('1 + 2 = 3', () => {
    expect(add2(1)).to.equal(3)
  })
})