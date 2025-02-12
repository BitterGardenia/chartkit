import { init } from '../src'

describe('echarts', () => {
  test('`init`方法', () => {
    const div = document.createElement('div')
    const chart = init(div)
    expect(chart).toBeDefined()
    expect(chart).toHaveProperty('setOption')
  })
})
