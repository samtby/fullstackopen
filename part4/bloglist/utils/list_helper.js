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
console.log("favoriteBlog: ")
console.log(favoriteBlog)

console.log(favoriteBlog["title"])
console.log(favoriteBlog["author"])
console.log(favoriteBlog["likes"])
  return {title: favoriteBlog["title"], author: favoriteBlog["author"], likes: favoriteBlog["likes"]}
}

const mostBlogs = (blogs) => {
  //arr2 = findOcc(blogs,"author");
  //New technical with 
  let mostBlog = _.countBy(blogs,"author")  
  mostBlog.reduce(function(prev, current) {
    return (prev.likes > current.likes) ? prev : current
  }) //returns object  
  //Old technical
  //const mostBlog = _.countBy(blogs,"author");
  console.log("countBy mostBlog: ",mostBlog)
}
//Old technical
function findOcc(arr, key){
  let arr2 = [];
  arr.forEach((x)=>{
       
    // Checking if there is any object in arr2
    // which contains the key value
     if(arr2.some((val)=>{ return val[key] == x[key] })){
       // If yes! then increase the occurrence by 1
       arr2.forEach((k)=>{
         if(k[key] === x[key])
           k["occurrence"]++
      })         
     }else{
       // If not! Then create a new object initialize 
       // it with the present iteration key's value and 
       // set the occurrence to 1
       let a = {}
       a[key] = x[key]
       a["occurrence"] = 1
       arr2.push(a);
     }
  })
  return arr2
}

module.exports = {
  dummy,totalLikes,favoriteBlog,mostBlogs
}