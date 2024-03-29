import React, { useState } from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, fireEvent } from '@testing-library/react'
import Blog from './Blog'
import blogService from '../services/blogs'
import loginService from '../services/login'
import axios from 'axios'



describe('renders content', () => {

const user = {
  title: 'test',
  author: 'test',
  id: '44300'
}

  const blog = {
    title: 'async/await simplifies making async calls',
    author: 'Robert C. Martin',
    user: {
      username: "samtby",
      name: "LaTest",
      id: "test"
    }
  }
  
  const component = render(
    <Blog blog={blog} user={user}/>
  )

  test('at start the url and likes are not displayed', () => {
    const div = component.container.querySelector('.togglableUrlLikes')
    expect(div).toHaveStyle('display: none')
  })


  
  test('clicking the button calls event handler once', () => {

    const user = {
      title: 'test',
      author: 'test',
      id: '44300'
    }
    
      const blog = {
        title: 'async/await simplifies making async calls',
        author: 'Robert C. Martin',
        user: {
          username: "samtby",
          name: "LaTest",
          id: "test"
        }
      }

    const mockHandler = jest.fn()

    const component = render(
      <Blog blog={blog} user={user}/>
    )

    const button = component.getByText('make not important')
    fireEvent.click(button)

    expect(mockHandler.mock.calls).toHaveLength(1)
  })
})