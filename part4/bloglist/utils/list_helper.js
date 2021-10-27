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

// countBy mostBlog:  { 'Michael Chan': 1, 'Edsger W. Dijkstra': 2, 'Robert C. Martin': 3 }
const mostBlogs = (blogs) => {
  //arr2 = findOcc(blogs,"author");
  //New technical with 
  
  let mostBlog = _.countBy(blogs,"author")
  mostBlog = _.invert(mostBlog)
  const max = Math.max.apply(null,Object.keys(mostBlog))
  //mostBlog = Math.max(blogs)
  
/*
  _.forEach({ 'a': 1, 'b': 2 }, function(value, key) {
  console.log(key);
  value 
});
/*
  _.forEach(mostBlog, function(prev, current) {
    //return (prev > current) ? prev : current
  //  Math.max(1, 3, 2)
    //console.log("test");
    console.log(prev,current);
  });
// { 'Michael Chan': 1, 'Edsger W. Dijkstra': 2, 'Robert C. Martin': 3 }
  */ 
  //mostBlog = _.findKey(mostBlog, function(o) { return  o === 3});

  //let mostBlog = _.sumBy(_.countBy(blogs,"author"),"author")

  //mostBlog = _.maxBy(mostBlog,mostBlog.property)
  
//  mostBlog.property
    /*mostBlog = _.find(mostBlog, function(prev, current) {
    return (prev > current) ? prev : current
  });*/
// => object for 'barney'
  //_.maxBy(mostBlog)
  /*mostBlog.reduce(function(prev, current) {
    return (prev.likes > current.likes) ? prev : current
  }) //returns object  */
  //Old technical
  
  //const mostBlog = _.countBy(blogs,"author");
  //console.log("countBy mostBlog: ",mostBlog)
  //console.log("Max: ",max,"mostBlog: ",mostBlog[max])

   return { author: mostBlog[max], blogs: max }
  
}
//Old technical
/*
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
*/

// countBy mostBlog:  { 'Michael Chan': 1, 'Edsger W. Dijkstra': 2, 'Robert C. Martin': 3 }
const mostLikes = (blogs) => {
  
  const result = []
  //arr2 = findOcc(blogs,"author");
  //New technical with 

  //{ 'Michael Chan': 1, 'Edsger W. Dijkstra': 2, 'Robert C. Martin': 3 }

  let mostBlog = _.countBy(blogs,"author")
    mostBlog = _.invert(mostBlog)
   /*
    { '1': 'Michael Chan',
    '2': 'Edsger W. Dijkstra',
    '3': 'Robert C. Martin'
  }*/
  let final ={author: '',likes : 0}
  _.forEach(mostBlog, function(author, key) { //console.log("mostBlog author: ", author);    

    
      result.push(_.filter(blogs,  function(o) { return o.author === author }))
      
      let compteur = 0    
      //const likesNunm =
       result
        _.forEach(result, function(value, key) {
          compteur += value[0].likes
          //console.log('value: ',value[0].likes)
      }) //returns object      
      console.log("mostBlog author: ", author);    
      final = Object.assign(final,{author: author,likes :compteur});
      
      
      console.log('compteur likes de',author, ': ',compteur)
      //console.log('likesNunm: ',likesNunm)
      //"author"))
  //result.push(_.filter(blogs,author))
    /*_.forEach(blogs, function(value, key) { console.log("blogs: ",value);
    //result = _.countBy(blogs,_.filter(mostBlog,author),"likes")
    
     });*/
  });
    console.log('final: ',final)
   //mostBlog = _.filter(blogs,"author")
  //mostBlog = _.invert(mostBlog)
  //const max = Math.max.apply(null,Object.keys(mostBlog))
  //console.log("mostLikesTest: ", result);
}

module.exports = {
  dummy,totalLikes,favoriteBlog,mostBlogs,mostLikes
}