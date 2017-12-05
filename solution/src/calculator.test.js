import calculator, { build_map } from './calculator'

describe('Calculator', () => {

  it('should return 0 when the input is null or empty array', () => {
    let { water_size } = calculator(null)
    expect(water_size).toEqual(0)

    water_size = calculator([]).water_size
    expect(water_size).toEqual(0)
  })

  it('should return 0 | it should match the first case in the algorithm', () => {
    const { water_size } = calculator([2, 3, 4, 5])
    expect(water_size).toEqual(0)
  })

  it('should return 0 | it should match the second case in the algorithm', () => {
    const { water_size } = calculator([2, 3, 5, 4, 3, 1])
    expect(water_size).toEqual(0)
  })

  it('should return 17', () => {
    const { water_size } = calculator([2, 5, 1, 3, 1, 2, 1, 7, 7, 6])
    expect(water_size).toEqual(17)
  })

  it('should build the map in asynchronous way', async () => {
    const { tasks } = calculator([2, 5, 1, 3, 1, 2, 1, 7, 7, 6])
    const map = await build_map(tasks)
    // console.log(map);
  })
})
