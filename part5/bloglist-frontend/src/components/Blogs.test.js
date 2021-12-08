import React, { useState } from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import Blog from './Blog'
import blogService from '../services/blogs'
import loginService from '../services/login'

// async function handleLogin(event) {

 

  // } catch (exception) { console.log("log login: ", exception)} 


// handleLogin()



test('renders content', async () => {

  const user = await loginService.login('mluukkai','salainen')
  blogService.setToken(user.token)
console.log('user login test:', user)

  // const user = loginService.login(
  //   'mluukkai', ' salainen'
  // )
  // console.log('================user=============================:', user)
  /*window.localStorage.setItem(
    'loggedBlogappUser', JSON.stringify(user)
  ) // You can view localstorage by console 'window.localStorage'*/
  // blogService.setToken(user.token)
  

  const blog = {
    title: 'async/await simplifies making async calls',
    author: 'Robert C. Martin'
  }

  
  const component = render(
    <Blog blog={blog} user={user}/>
  )

  expect(component.container).toHaveTextContent(
    'async/await simplifies making async calls'
  )

  expect(component.container).toHaveTextContent(
    'Robert C. Martin'
  )
})