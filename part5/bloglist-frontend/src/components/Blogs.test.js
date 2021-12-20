import React, { useState } from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import Blog from './Blog'
import blogService from '../services/blogs'
import loginService from '../services/login'
import axios from 'axios'



// async function handleLogin(event) {

 

  // } catch (exception) { console.log("log login: ", exception)} 


// handleLogin()


// const [userStr, setUserStr] = useState('')

test('renders content', async () => {


  // let  username = 'mluukkai' 
  // let  password =  'salainen'
  // const user = null
  // const baseUrl = '/api/login'
  // // const handleLogin = async (event) => {
  //   // event.preventDefault()
  //   console.log('logging in with', username, password)
  //   const credentials = {
  //     username, password,
  //   }
  //   const response = await axios.post(baseUrl, credentials)
  //   console.log('response login', response)
  //   try {
  //     user = response.data
  //     // user =  loginService.login(credentials)
  //     const setUserStr = 'loggedBlogappUser' + JSON.stringify(user) // You can view localstorage by console 'window.localStorage'
  //     console.log('##################################################')
  //     console.log('setUserStr ' ,setUserStr)
  //     console.log('user ' ,user)
      // blogService.setToken(user.token)
      
  //   } catch (exception) {
  //     console.log('exception',exception)

      //setErrorMessage({ status:'failed',content:'Wrong username or password' })
    // }
  // }

// try{
// //  const user = await loginService.login('mluukkai','salainen')
// const user = await loginService.login(
// {
//     username: 'mluukkai', 
//     password: 'salainen'
// })

// console.log('user login test:', user)
// }
// catch(exception){

//   console.log("exception", exception)


// }



  // const user =  await loginService.login(
  //   'mluukkai', ' salainen'
  // )
  //console.log('================user=============================:', user)
  /*window.localStorage.setItem(
    'loggedBlogappUser', JSON.stringify(user)
  ) // You can view localstorage by console 'window.localStorage'*/
   //blogService.setToken(user.token)

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

  expect(component.container).toHaveTextContent(
    'async/await simplifies making async calls'
  )

  expect(component.container).toHaveTextContent(
    'Robert C. Martin'
  )
  
})