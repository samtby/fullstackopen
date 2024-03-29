const mongoose = require('mongoose')
const supertest = require('supertest')
const bcrypt = require('bcrypt')
const app = require('../app')
const api = supertest(app)
const Blog = require('../models/blog')
const User = require('../models/user')
const helper = require('./test_helper')

//jest.useFakeTimers();
// Jest has detected the following 1 open handle potentially keeping Jest from exiting:


/*  console.log("blogObject 1:",blogObject)
  let blogObject = new Blog(helper.initialBlogs[0])
  await blogObject.save()    
  blogObject = new Blog(helper.initialBlogs[1])
  console.log("blogObject 2:",blogObject)
*/

beforeEach(async () => {
/*  await User.deleteOne({name: "userTest"})
  const userTest = {
      username: "userTest",
      name: "userTest",
      password: "userTest"
  }
  const userTestObject = new User(userTest)
  userTestObject.save()*/
  //await Promise.all(userTestObject)
  await Blog.deleteMany({})
  const blogObject = helper.initialBlogs.map(blog => new Blog(blog))
  const promiseArray = blogObject.map(blog => blog.save())
  await Promise.all(promiseArray)
 
})

  
// https://www.albertgao.xyz/2017/05/24/how-to-test-expressjs-with-jest-and-supertest/
// https://zellwk.com/blog/jest-and-mongoose/
/*  afterAll(async () => {
    await dropAllCollections()
    // Closes the Mongoose connection
    await mongoose.connection.close()
  })
*/
// 4.8: Blog list tests, step1
/*
  beforeEach(async () => {  
    await Blog.deleteMany({}) 
    console.log('cleared') 
    helper.initialBlogs.forEach(async (blog) => {
      let blogObject = new Note(blog)
      await blogObject.save()
      console.log('saved')
    })
  await blogObject.save()
  })
*/
describe('when there is initially som blogs saved', () => {
  test('blogs are returned as json', async () => { // 4.8: Blog list tests, step1
    //console.log('entered test')
    const response = await api
      .get('/api/blogs')
      .expect(200)
      .expect('Content-Type', /application\/json/)
      expect(response.body).toHaveLength(helper.initialBlogs.length)
      //console.log("respons body return as json :",response.body)
    })

  test('verifies that the unique identifier property of the blog posts is named id', async () => { // 4.9*: Blog list tests, step2
    //console.log('entered test')
    const response = await api.get('/api/blogs')
    .expect(200)
    .expect('Content-Type', /application\/json/)
    response.body.forEach(blog => {
      expect(blog.id).toBeDefined();
    })  
  })

//  test('a specific blog is within the returned blogs', async () => {
//       const response = await api.get('/api/blogs')
//       const contents = response.body.map(r => r.url)  
//       expect(contents).toContain(
//         'https://reactpatterns.com/'
//       )
//   })
})

describe('addition of a new blog', () => {

  beforeEach(async () => {
    await User.deleteMany({})
    const reponse = await User.find({})
    const finds = await api.get('/api/users')
    const passwordHash = await bcrypt.hash('sekret', 10)
    const user = new User({ username: 'root', passwordHash, namee: 'root' })
    await user.save()
  })

  afterAll(()=> {
    mongoose.connection.close()
  })

  test('a valid blog can be added', async () => { //4.10: Blog list tests, step3
    const newBlog = {
      title: "async/await simplifies making async calls",
      author: "Robert C. Martin",
      url: "https://javascript.info/async-await",
      likes: 0,
    }
    const user = { username: 'root', password: 'sekret'}
    const responseLogin  = await api.post('/api/login').send(user)  
    const login = responseLogin.body
    // console.log("reponse login: ", login)
    await api
      .post('/api/blogs')
      .set('Authorization', 'Bearer '+login.token) // Works.`bearer ${newToken}`
      .send(newBlog)
      .expect(201)
      .expect('Content-Type', /application\/json/)

    const response = await api.get('/api/blogs')
    const blogsAtEnd = await helper.blogInDb()
    expect(blogsAtEnd).toHaveLength(helper.initialBlogs.length + 1)
    
    const title = response.body.map(n => n.title)
    expect(title).toContain(
      'async/await simplifies making async calls'
      )
  })

  // test('succeeds with a valid data', async () => {
  //   let newBlog = {
  //     title: "Le dernier voeu",
  //     author: "Andrzej Sapkowski",
  //     url: "https://www.babelio.com/auteur/Andrzej-Sapkowski/5111",
  //     likes: 0,
  //   }

  //   newBlog = await api
  //     .post('/api/blogs')
  //     .send(newBlog)
  //     .expect(201)

  //   const blogsAtEnd = await helper.blogInDb()
  //   expect(blogsAtEnd).toHaveLength(helper.initialBlogs.length +1 )
  //   newBlog = blogsAtEnd.find(blog => blog.id === newBlog.body.id )
  //   expect(newBlog.title).toContain('Le dernier voeu')
  //   expect(newBlog.author).toContain('Andrzej Sapkowski')
  //   expect(newBlog.url).toContain('https://www.babelio.com/auteur/Andrzej-Sapkowski/5111')    
  // })

  test('verifies that if the likes property is missing from the request', async () => { // 4.11*: Blog list tests, step4
    const newBlog = {
      title: "epee de la providence",
      author: "Andrzej Sapkowski",
      url: "https://www.babelio.com/auteur/Andrzej-Sapkowski/5111"
    }
    const user = { username: 'root', password: 'sekret'}
    const responseLogin  = await api.post('/api/login').send(user)  
    const login = responseLogin.body

      await api
      .post('/api/blogs')
      .send(newBlog)
      .set('Authorization', 'Bearer '+login.token) // Works.
      .expect(201)
      const blogCreated = (await helper.blogInDb()).reduce((r, blog) => blog.title === 'epee de la providence' ? blog : undefined)
      //console.log('blogCreated: ',blogCreated)
      expect(blogCreated.likes).toBe(0)
  })

  test('verifies that if the title and url properties are missing from the request data', async () => { // 4.12*: Blog list tests, step5
    const newBlog = {author: "Andrzej Sapkowski" }
    
    const user = { username: 'root', password: 'sekret'}
    const responseLogin  = await api.post('/api/login').send(user)  
    const login = responseLogin.body  

    const response =  await api
    .post('/api/blogs')
    .set('Authorization', 'Bearer '+login.token) // Works.
    .send(newBlog)
    .expect(400)
    //console.log("response.status: ", response.status, response.body)
  })
  //Test to ensure adding a blog fails with the proper status code 401 Unauthorized if a token is not provided
  
  test('verifies to ensure adding a blog fails with the proper status code 401 Unauthorized if a token is not provided', async () => { // 4.12*: Blog list tests, step5
    const newBlog = {
      title: "",
      author: "Jean-marc.jancovici@m4x.org",
      url: "https://jancovici.com/"
    }
    const response =  await api
    .post('/api/blogs')
    .send(newBlog)
    .expect(401)
    //console.log("response.status: ", response.status, response.body)
  })
})

describe('deletion of a blog', () => {

  beforeEach(async () => {
  await User.deleteMany({})
  const reponse = await User.find({})
  const finds = await api.get('/api/users')
  const passwordHash = await bcrypt.hash('sekret', 10)
  const user = new User({ username: 'root', passwordHash, namee: 'root' })
  
   await user.save()
 })

 afterEach(function (done) {

})
  test('succeeds with status code 204 if id is valid', async () => {
    // const blogsAtStart = await helper.blogInDb()
    // const blogToDelete = blogsAtStart[0]

    const blogsAtStart = {
      title: "async/await simplifies making async calls",
      author: "Robert C. Martin",
      url: "https://javascript.info/async-await",
      likes: 0,
    }
    const user = { username: 'root', password: 'sekret'}
    const responseLogin  = await api.post('/api/login').send(user)  
    const login = responseLogin.body
    // console.log("reponse login: ", login)
    const responsePost = await api
      .post('/api/blogs')
      .set('Authorization', 'Bearer '+login.token) // Works.
      .send(blogsAtStart)
    console.log("response.body: ",responsePost.body)
    const blogToDelete = responsePost.body
    //const response = await api.get('/api/blogs')
    
    await api
      .delete(`/api/blogs/${blogToDelete.id}`)
      .set('Authorization', 'Bearer '+login.token) // Works.
      .expect(204)
      
    await api
      .get(`/api/blogs/${blogToDelete.id}`)
      .expect(404)
/*

    const blogsAtEnd = await helper.blogInDb()

    expect(blogsAtEnd).toHaveLength(
      helper.initialBlogs.length - 1
    )

    const title = blogsAtEnd.map(r => r.title)
    expect(title).not.toContain(blogToDelete.title)*/
  })
})

  test('updating the information of an individual blog post', async () => {
    const blogsAtStart = await helper.blogInDb()
    const blogToModified = blogsAtStart[0]
    
    blogToModified.title = 'fullstackopen'
    blogToModified.likes = 2
    //console.log("blogToDelete: ",blogToModified)
    
    await api
      .put(`/api/blogs/${blogToModified.id}`)
      .send(blogToModified)
      .expect(204)

    const blogsAtEnd = await helper.blogInDb()
    const title = blogsAtEnd.map(r => r.title)
    //console.log("blogsAtEnd: ",blogsAtEnd)
    expect(title).toContain('fullstackopen')
  })



  //...

describe('when there is initially one user in db', () => {
  beforeEach(async () => {
    await User.deleteMany({})

    const passwordHash = await bcrypt.hash('sekret', 10)
    const user = new User({ username: 'root', passwordHash })

    await user.save()
  })

  test('creation succeeds with a fresh username', async () => {
    const usersAtStart = await helper.usersInDb()

    const newUser = {
      username: 'mluukkai',
      name: 'Matti Luukkainen',
      password: 'salainen',
    }

    await api
      .post('/api/users')
      .send(newUser)
      .expect(200)
      .expect('Content-Type', /application\/json/)

    const usersAtEnd = await helper.usersInDb()
    expect(usersAtEnd).toHaveLength(usersAtStart.length + 1)

    const usernames = usersAtEnd.map(u => u.username)
    expect(usernames).toContain(newUser.username)
  })
  
  // ...

  test('creation fails with proper statuscode and message if username already taken', async () => {
    const usersAtStart = await helper.usersInDb()

    const newUser = {
      username: 'root',
      name: 'Superuser',
      password: 'salainen',
    }

    const result = await api
      .post('/api/users')
      .send(newUser)
      .expect(400)
      .expect('Content-Type', /application\/json/)

    expect(result.body.error).toContain('`username` to be unique')

    const usersAtEnd = await helper.usersInDb()
    expect(usersAtEnd).toHaveLength(usersAtStart.length)
  })
})

// ...

afterAll( async()=> {
  mongoose.connection.close()
  //await new Promise(resolve => setTimeout(() => resolve(), 500)); // avoid jest open handle error
})