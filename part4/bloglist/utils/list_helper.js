const dummy = (blogs) => {
  // ...
  if(Array.isArray(blogs))
    return 1
}  

const totalLikes = (blogs) => {
  let countLikes = 0 // if blogs.length == 0
    if(blogs.length == 1)
      blogs.map(blog => countLikes = blog.likes)
    if(blogs.length > 1)
      blogs.map(blog => countLikes += blog.likes)  
  return countLikes
}

module.exports = {
dummy,totalLikes
}