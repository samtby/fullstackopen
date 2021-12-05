import React, { useState} from 'react'
import Like from '../components/Like'
import blogService from '../services/blogs'

const Blog = ({ user,blog,handleSetBlog }) => {
  const [visible, setVisible] = useState(false)
    //const deletePerson = (id,name) 
    const addLike = (blog) => {      
      //event.preventDefault()
      //blogService.update()
      // console.log(user.id ,blog.user)

    }

  const blogStyle = {
    paddingTop: 10,
    paddingLeft: 2,
    border: 'solid',
    borderWidth: 1,
    marginBottom: 5
  }
  const showWhenVisible = { display: visible ? '' : 'none' }

  const toggleVisibility = () => {
    console.log('addLike blog.user =', blog.user)
    setVisible(!visible)
  }

  const deleteBlog = async () => {    
    if (window.confirm(`Remove blog ${blog.title} by ${blog.author} ?`)){
      try { 
        //personService.del(id).then(response =>{response.status === 200?handleSetPersons():console.log(response.status)})        
        const response = await blogService.del(blog.id)
        console.log("user: ",user)
        //setVisible(!visible)
        handleSetBlog()
      } catch (exception) { }
    }
}

  return (
    <div style={blogStyle}>
      <div>
        {blog.title} {blog.author}<button onClick={toggleVisibility}>{visible ? 'hide' : 'view'}</button>
      </div>
      <div style={showWhenVisible}>
      <div>{blog.url}</div>
      <Like blog={blog}/>
      <div>{blog.user.name}</div> 
      { blog.user.id === user.id && <div><button onClick={deleteBlog}>remove</button></div>}
    </div>
  </div>
)}

export default Blog