import calculator from './calculator'

describe('Calculator', () => {
  it('should return 17', () => {
    const water_size = calculator([2, 5, 1, 3, 1, 2, 1, 7, 7, 6])
    expect(water_size).toEqual(17)
  })
})
