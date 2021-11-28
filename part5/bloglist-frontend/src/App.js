import React, { useState, useEffect } from 'react'
import Blog from './components/Blog'
import Notification from './components/Notification'
import blogService from './services/blogs'
import loginService from './services/login'
const App = () => {
  const [blogs, setBlogs] = useState([]) 
  const [newBlog, setNewBlog] = useState('')
  const [showAll, setShowAll] = useState(true)
  const [errorMessage, setErrorMessage] = useState(null)
  const [username, setUsername] = useState('mluukkai')
  const [password, setPassword] = useState('salainen') 
  const [user, setUser] = useState(null)


  const handleLogin = async (event) => { 
    event.preventDefault()  
    console.log('logging in with', username, password)
    try { 
      const user = await loginService.login({
        username, password,
      }) 
      window.localStorage.setItem(
        'loggedBlogappUser', JSON.stringify(user)
      ) // You can view localstorage by console 'window.localStorage'
      blogService.setToken(user.token)
      setUser(user)
      setUsername('')
      setPassword('')
    } catch (exception) {
      setErrorMessage('Wrong credentials')
      setTimeout(() => {
        setErrorMessage(null)
      },
    5000)
  }
 }

  useEffect(() => {
    blogService.getAll().then(blogs =>
      setBlogs( blogs )
    )  
  }, [])



  useEffect(() => {  
    const loggedUserJSON = window.localStorage.getItem('loggedBlogappUser')
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      setUser(user)
      blogService.setToken(user.token)
      setUsername('')
      setPassword('')
    }  
  }, [])


  const addBlog = (event) => {    
    event.preventDefault()

  }

  const handleBlogChange = (event) => {
    if(event.target.name === 'name')
    newBlog(event.target.value)
    console.log( event.target.name ,event.target.value)
  }
  

  
  const logout = (event) => {    
    event.preventDefault()
    window.localStorage.removeItem('loggedBlogappUser')
    setUser(null)
    setUsername('')
    setPassword('')

    //Or
    //window.localStorage.clear()
  }

  const loginForm = () => (
    <form onSubmit={handleLogin}>
      <div>
        username
          <input
          type="text"
          value={username}
          name="Username"
          onChange={({ target }) => setUsername(target.value)}
        />
      </div>
      <div>
        password
          <input
          type="password"
          value={password}
          name="Password"
          onChange={({ target }) => setPassword(target.value)}
        />
      </div>
      <button type="submit">login</button>
    </form>      
  )




  const blogForm = () => (
    <form onSubmit={addBlog}>
      <input
        value={newBlog}
        onChange={handleBlogChange}
      />
      <button type="submit">save</button>
    </form>  
  )

  if (user === null) {
    return (
      <div>
        <h2>log in to application</h2>
        <Notification message={errorMessage} />
        {loginForm()}
        {/*user === null && loginForm()*/}
    </div>
    )
  }
  
  return(
    <div>
      <h2>Blogs</h2>
      {
        <div>
          <p>{user.name} logged-in<button type="button" onClick={logout}>logout</button></p>
          {/*user && blogForm()*/}
          
      </div>
      }
      {blogs.map(blog =>
        <Blog key={blog.id} blog={blog} />
      )}
    </div>
  )
}

export default App