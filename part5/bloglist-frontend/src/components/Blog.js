import React, { useState} from 'react'
import Like from '../components/Like'
const Blog = ({ blog,handleLike }) => {
  const [visible, setVisible] = useState(false)
    //const deletePerson = (id,name) 
    const addLike = (blog) => {      
      //event.preventDefault()
      //blogService.update()
      console.log('addLike =', blog)
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
    setVisible(!visible)
  }

  
  const majLike = () => {

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
    </div>
  </div>
)}

export default Blog