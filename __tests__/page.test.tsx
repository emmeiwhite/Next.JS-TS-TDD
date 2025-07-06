import { expect, test } from 'vitest' // Task Runner, Plus Assertion
import { render, screen } from '@testing-library/react' // Rendering Components + Querying
import Home from '@/app/page'

// Test Suite
test('Page', () => {
  // 1. Render the Component
  render(<Home />)
  // 2. Query or Interact (like DOM Manipulation)
  const heading1 = screen.getByRole('heading', { level: 1, name: 'Home' })
  // 3. Assertion
  expect(heading1).toBeDefined()
})
