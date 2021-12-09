import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import Blog from './Blog'
import loginService from '../services/login'
import blogService from '../services/blogs'


test('renders content', async () => {

  let user
  console.log('logging in with mluukkai')
  
    const responseLogin = await loginService.login({
      username: 'mluukkai',
      password: 'salainen'
    }).then(function(result) {
      console.log('responseLogin: ',result) // "Some User token"
      user = result
      blogService.setToken(result.token)
   }).catch((exception) => {
    console.error('Do that ', exception);
})
    //console.log('responseLogin: ' ,responseLogin)
    /*window.localStorage.setItem(
      'loggedBlogappUser', JSON.stringify(user)
    ) // You can view localstorage by console 'window.localStorage'*/
     


  const blog = {
    title: 'async/await simplifies making async calls',
    author: 'Robert C. Martin',
    user: {
    name: 'TOTO'
    }
  }

  const component = render(
    <Blog blog={blog}user={user} />
  )

  expect(component.container).toHaveTextContent(
    'async/await simplifies making async calls'
  )

  expect(component.container).toHaveTextContent(
    'Robert C. Martin'
  )
})