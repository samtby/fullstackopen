import React, { useState } from 'react'
import Like from '../components/Like'
import blogService from '../services/blogs'

const Blog = ({ user,blog,handleSetBlog }) => {
  const [visible, setVisible] = useState(false)

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
        await blogService.del(blog.id)
        console.log('user: ',user)
        //setVisible(!visible)
        handleSetBlog()
      } catch (exception) { console.log(exception)}
    }
  }

  return (
    <div style={blogStyle}>
      <li className='blog'>
        <div>
          {blog.title} {blog.author}<button onClick={toggleVisibility}>{visible ? 'hide' : 'view'}</button>
        </div>
        <div style={showWhenVisible}>
          <div>{blog.url}</div>
          <Like blog={blog}/>
          <div>{blog.user.name}</div>
          <div>{console.log(blog.user.name)}</div>
          { blog.user.id === user.id && <div><button onClick={deleteBlog}>remove</button></div>}
        </div>
      </li>
    </div>
  )
}

export default Blog