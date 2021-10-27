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
  console.log(mostBlog)
  mostBlog = _.invert(mostBlog)
  console.log(mostBlog)
  const max = Math.max.apply(null,Object.keys(mostBlog))

/*
  let mostBlog =_.reduce(blogs,function(mem, next){
    author = next.author;
    let existingObj = _.find(mem, function(item) { return item.author === author; })
    existingObj ? existingObj.count++ : mem.push(_.extend(next, {count: 1}))
    return mem
  }, [])
  */
  
  // => { '1': ['a', 'c'], '2': ['b'] } (iteration order is not guaranteed)
  
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
  
  
  const final = []
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
  //let final ={author: '',likes : 0}
  let final_final = {}
  console.log("mostBlog : ", mostBlog);    
  _.forEach(mostBlog, function(author, key) { 
      let result = []
    
      result.push(_.filter(blogs,  function(o) { return o.author === author }))
      console.log('###############################################')
      console.log(' result: ', result)      
      let compteur = 0 
      console.log('compteur :', compteur )
      //const likesNunm =
       
        _.forEach(result, function(value, key) { // [_.filter(blogs,  function(o) { return o.author === author })]
          console.log('=================Likes=================')
          _.forEach(value, function(value, key) {
            console.log('value.likes: ',value.likes)
            compteur += value.likes
        })
      })
      console.log("mostBlog author: ",  author, 'likes: ',compteur);    
      //let objetcMostLikes ={author: author,likes :compteur}
      final.push({author: author,likes :compteur})
       //_.unionWith(final_final,objetcMostLikes );
      
      
      //console.log('compteur likes de',author, ': ',compteur)
      //console.log('likesNunm: ',likesNunm)
      //"author"))
  //result.push(_.filter(blogs,author))
    /*_.forEach(blogs, function(value, key) { console.log("blogs: ",value);
    //result = _.countBy(blogs,_.filter(mostBlog,author),"likes")
    
     });*/
  });
/*
  var object = {
    { 'b': 2 }
  };
   
  var other = {
    { 'c': 3 }
  };
  */
  // _.union(object, other);
  // => { 'a': [{ 'b': 2, 'c': 3 }, { 'd': 4, 'e': 5 }] }
    //console.log('final: ',final_final)
    console.log('final: ',final)
    console.log('On boit une biere')
        
   //mostBlog = _.filter(blogs,"author")
  //mostBlog = _.invert(mostBlog)
  //const max = Math.max.apply(null,Object.keys(mostBlog))
  //console.log("mostLikesTest: ", result);

 return _.maxBy(final,'likes') 
}

module.exports = {
  dummy,totalLikes,favoriteBlog,mostBlogs,mostLikes
}