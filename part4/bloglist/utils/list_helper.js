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

    
  for (var key in blogs) {
    if (key.hasOwnProperty('likes'))
      countLikes += key[likes]
  
      console.log(countLikes)

  //  blogs.map(blog => countLikes += blogs.totalLikes)

   return countLikes
  }
}


module.exports = {
  dummy,totalLikes
}