import { test, expect } from 'vitest'
import sum from './sum'

test('sum of two numbers', () => {
  expect(sum(12, 40)).toBe(52)
})
