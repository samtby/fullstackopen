const dummy = (blogs) => {
    // ...
    if(Array.isArray(blogs))
      return 1
    //return 0
  }  

  const totalLikes = (blogs) => {
  let countLikes = 0
    /*Object.keys(blogs).map(function(likes, index) {
      countLikes =+ blogs[likes] 
    })*/

    
  for (var key in myObject) {
    if (myObject.hasOwnProperty(likes))
      countLikes += blogs[likes]
  

  //  blogs.map(blog => countLikes += blogs.totalLikes)
  return countLikes
  }
  
}


module.exports = {
  dummy,totalLikes
}