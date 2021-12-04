import React, { useState, useEffect, useRef } from 'react'
import Blog from './components/Blog'
import Notification from './components/Notification'
import LoginForm from './components/LoginForm'
import BlogForm from './components/BlogForm'
import Togglable  from './components/Togglable '
import blogService from './services/blogs'
import loginService from './services/login'
const App = () => {
  const [loginVisible, setLoginVisible] = useState(false)
  const [blogs, setBlogs] = useState([]) 
  const [newBlog, setNewBlog] = useState()
  const [showAll, setShowAll] = useState(true)
  const [errorMessage, setErrorMessage] = useState(null)
  const [username, setUsername] = useState('mluukkai')
  const [password, setPassword] = useState('salainen') 
  const [title, setTitle] = useState('') 
  const [author, setAuthor] = useState('') 
  const [url, setUrl] = useState('') 
  const [user, setUser] = useState(null)

  const blogFormRef = useRef()

  const messageNotification = (message) =>{
    console.log("messageNotification: ")
    setErrorMessage(message)
    setTimeout(() => {
      setErrorMessage(null)
    }, 5000)
  }


  const handleLogin = async (event) => { 
    event.preventDefault()  
    console.log('logging in with', username, password)
    try { 
      const user = await loginService.login({
        username, password,
      }) 
      console.log("user",user)
      window.localStorage.setItem(
        'loggedBlogappUser', JSON.stringify(user)
      ) // You can view localstorage by console 'window.localStorage'
      blogService.setToken(user.token)      
      setUser(user)
      setUsername('')
      setPassword('')
    } catch (exception) {      

      setErrorMessage({status:`failed`,content:`Wrong username or password`})
      /*
      setErrorMessage({status:`failed`,content:`Wrong username or password`})
      setTimeout(() => {
      setErrorMessage(null)
      },
    5000)*/

  }
 }

 const getBlogs = () => blogService.getAll().then(blogs =>      
  setBlogs(blogs.sort((a, b) => (a.likes > b.likes) ? -1 : 1))
)
  useEffect(() => {
    getBlogs()
    console.log("blogs: useEffect", blogs) 
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

    blogFormRef.current.toggleVisibility()
        blogService.create({
          title: title,
          author: author,
          url: url
        })
        .then(response => {

          if(response.error !== undefined){
            messageNotification({status:`fail`,content:`Error impossible adding, try again or with other value`})
          }else{
          console.log("response : ",response)
            setBlogs(blogs.concat(response))
            //handleSetPersons(persons.concat(returnedPerson))  
            /*console.log('success: ', username)
            console.log(returnedBlog)*/
            messageNotification({status:`success`,content:`a new blog ${title} by ${author} add `})
            setAuthor('')
            setTitle('')
            setUrl('')
          }
        }).catch(errorMessage => {
          /*console.log(errorMessage.response.data)
          console.log(errorMessage.response.data.error)
          console.log("errorMessage catch: ", errorMessage)*/
          //messageNotification({status:`fail`,content:errorMessage.response.data.error})
          //messageNotification({status:`fail`,content:`Error impossible adding, try again or with other value`})
        })
    }


     /*
  const handleBlogChange = (event) => {
    if(event.target.name === 'name')
    newBlog(event.target.value)
    console.log( event.target.name ,event.target.value)
  }
  
*/
  
  const logout = (event) => {    
    event.preventDefault()
    window.localStorage.removeItem('loggedBlogappUser')
    setUser(null)
    setUsername('')
    setPassword('')

    //Or
    //window.localStorage.clear()
  }

  
  const blogForm = () => {
    return (
      <div>
        <Togglable buttonLabel='create new blog' ref={blogFormRef}>
          <BlogForm
            titleBlogCreatelog='create new'
            handleButtonSubmit='create'
            title={title}
            author={author}
            url={url}
            handleSubmit={addBlog}
            handleTitleChange={({ target }) => setTitle(target.value)}
            handleAuthorChange={({ target }) =>setAuthor(target.value)}
            handleUrlChange={({ target }) => setUrl(target.value)}
          />
        </Togglable>
      </div>
    )
}

/*
const loginForm = (
          <LoginForm
          username={username}
          password={password}
          handleUsernameChange={({ target }) => setUsername(target.value)}
          handlePasswordChange={({ target }) => setPassword(target.value)}
          handleSubmit={handleLogin}
        /> 
      
  )

*/

  if (user === null) {
    return (
      <div>
        <h2>log in to application</h2>
        <Notification message={errorMessage} />

        <LoginForm
          username={username}
          password={password}
          handleUsernameChange={({ target }) => setUsername(target.value)}
          handlePasswordChange={({ target }) => setPassword(target.value)}
          handleSubmit={handleLogin}  
        />
        
    </div>
    )
  }
  
  return(
    <div>
      <h2>Blogs</h2>
      <Notification message={errorMessage} />
      {
        <div>
          <p>{user.name} logged-in<button type="button" onClick={logout}>logout</button></p>
          {/* {user && blogForm()}           */}
      </div>
      }
      {blogForm()}
      {blogs.map(blog =>
        <Blog key={blog.id} user={user} blog={blog} handleSetBlog={getBlogs} />
      )}
    </div>
  )
}

export default App