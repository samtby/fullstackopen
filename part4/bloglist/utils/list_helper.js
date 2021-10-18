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

const favoriteBlog = (blogs) => {
const favoriteBlog = blogs.reduce(function(prev, current) {
  return (prev.likes > current.likes) ? prev : current
}) //returns object
console.log("favoriteBlog: ")
console.log(favoriteBlog)

console.log(favoriteBlog["title"])
console.log(favoriteBlog["author"])
console.log(favoriteBlog["likes"])
  return {title: favoriteBlog["title"], author: favoriteBlog["author"], likes: favoriteBlog["likes"]}
}

module.exports = {
dummy,totalLikes,favoriteBlog
}