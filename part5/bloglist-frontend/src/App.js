import React, { useState, useEffect } from 'react'
import Blog from './components/Blog'
import Notification from './components/Notification'
import blogService from './services/blogs'
import loginService from './services/login'
const App = () => {
  const [blogs, setBlogs] = useState([]) 
  const [newBlog, setNewBlog] = useState()
  const [showAll, setShowAll] = useState(true)
  const [errorMessage, setErrorMessage] = useState(null)
  const [username, setUsername] = useState('mluukkai')
  const [password, setPassword] = useState('salainen') 
  const [title, setTitle] = useState('premier Volet') 
  const [author, setAuthor] = useState('Astier') 
  const [url, setUrl] = useState('https://www.lott.com/') 
  const [user, setUser] = useState(null)


    
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

 /*
 
 setErrorMessage({status:`success`,content:`a new blog You're NOT gonna need it! by ${username}`})
      setTimeout(() => {
      setErrorMessage(null)
      },
    5000)
 */

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

        blogService.create({
          title: title,
          author: author,
          url: url
        })
        .then(returnedBlog  => {
          console.log("returnedBlog: ",returnedBlog)

            //handleSetPersons(persons.concat(returnedPerson))  
            /*console.log('success: ', username)
            console.log(returnedBlog)*/
            messageNotification({status:`success`,content:`a new blog You're NOT gonna need it! by ${user.name} add `})
            setAuthor('')
            setTitle('')
            setUrl('')
          
        }).catch(errorMessage => {
          /*console.log(errorMessage.response.data)
          console.log(errorMessage.response.data.error)
          console.log("errorMessage catch: ", errorMessage)*/
          //messageNotification({status:`fail`,content:errorMessage.response.data.error})
          messageNotification({status:`fail`,content:`Error impossible adding, try again or with other value`})
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
      <div>
        title
          <input
          type="text"
          value={title}
          name="title"
          onChange={({ target }) => setTitle(target.value)}
        />
      </div>
      <div>
        author
          <input
          type="text"
          value={author}
          name="author"
          onChange={({ target }) =>setAuthor(target.value)}
        />
      </div>
      <div>
        url
          <input
          type="text"
          value={url}
          name="url"
          onChange={({ target }) => setUrl(target.value)}
        />
      </div>
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
      <Notification message={errorMessage} />
      {
        <div>
          <p>{user.name} logged-in<button type="button" onClick={logout}>logout</button></p>
          {user && blogForm()}          
      </div>
      }
      {blogs.map(blog =>
        <Blog key={blog.id} blog={blog} />
      )}
    </div>
  )
}

export default App