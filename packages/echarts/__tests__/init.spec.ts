import { expect, test } from 'vitest'
import { JSDOM } from 'jsdom'
import { init } from '../src'

test('测试`init`方法', () => {
  const { window } = new JSDOM()
  const div = window.document.createElement('div')
  const chart = init(div)
  expect(chart).toBeDefined()
  expect(chart).toHaveProperty('setOption')
})
