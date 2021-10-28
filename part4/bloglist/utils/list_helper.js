// Load the full build.
var _ = require('lodash');
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
  return {title: favoriteBlog["title"], author: favoriteBlog["author"], likes: favoriteBlog["likes"]}
}

const mostBlogs = (blogs) => {
 
  let mostBlog = _.countBy(blogs,"author")
  mostBlog = _.invert(mostBlog)
  const max = Math.max.apply(null,Object.keys(mostBlog))
   
   return { author: mostBlog[max], blogs: max }
}

const mostLikes = (blogs) => {
  const final = []
  let mostBlog = _.countBy(blogs,"author")
    mostBlog = _.invert(mostBlog)
  let final_final = {}
  _.forEach(mostBlog, function(author, key) { 
      let result = []
    
      result.push(_.filter(blogs,  function(o) { return o.author === author }))
      let compteur = 0 
      //const likesNunm =
       
        _.forEach(result, function(value, key) {
          _.forEach(value, function(value, key) {
            compteur += value.likes
        })
      })
      final.push({author: author,likes :compteur})
  });
 return _.maxBy(final,'likes') 
}

module.exports = {
  dummy,totalLikes,favoriteBlog,mostBlogs,mostLikes
}