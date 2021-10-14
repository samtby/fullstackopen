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
  let favoriteBlog = {}
  countLikes = 0  
//  Math.max.apply(Math, array.map(function(blog) { return blog.y; }))
//  favoriteBlog = blogs.filter(blog => countLikes > blog.likes)
//favoriteBlog = blogs.filter(blog => countLikes > blog.likes)
favoriteBlog =  blogs.reduce((acc, blog) => acc = acc > blog.likes ? acc : blog.likes, 0);
console.log("favoriteBlog")
 console.log(favoriteBlog)
  return {title: favoriteBlog["title"], author: favoriteBlog["author"], likes: favoriteBlog["likes"]}
}

module.exports = {
dummy,totalLikes,favoriteBlog
}