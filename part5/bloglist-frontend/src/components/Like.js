import React, { useState } from 'react'
import blogService from '../services/blogs'
const Like = ({ blog }) => {
  const [likes, setLike] = useState(blog.likes? blog.likes:0)

  const handLike = async () => {
    try {
      const blogLilke = await blogService.update(blog.id,{ likes: likes+1 })
      console.log('blogLilke' , blogLilke )
      setLike(likes+1)
    } catch (exception) {
      console.log(exception)
    }
  }

  return (
    <div>
      <div>{likes}<button onClick={handLike} >like</button></div>
    </div>
  )}

export default Like