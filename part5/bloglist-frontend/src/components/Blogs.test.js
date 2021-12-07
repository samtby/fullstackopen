import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import Blog from './Blog'

test('renders content', () => {
  const blog = {
    title: 'async/await simplifies making async calls',
    author: 'Robert C. Martin'
  }

  const component = render(
    <Blog blog={blog} />
  )

  expect(component.container).toHaveTextContent(
    'async/await simplifies making async calls'
  )

  expect(component.container).toHaveTextContent(
    'Robert C. Martin'
  )
})