const mongoose = require('mongoose')
const supertest = require('supertest')
const app = require('../app')
const api = supertest(app)
const Blog = require('../models/blog')
const initialTowBlogs = [
  {
    _id: "5a422a851b54a676234d17f7",
    title: "React patterns",
    author: "Michael Chan",
    url: "https://reactpatterns.com/",
    likes: 7,
    __v: 0
  },
  {
    _id: "5a422aa71b54a676234d17f8",
    title: "Go To Statement Considered Harmful",
    author: "Edsger W. Dijkstra",
    url: "http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html",
    likes: 5,
    __v: 0
  }
]
const initialBlogs = [
  {
    _id: "5a422a851b54a676234d17f7",
    title: "React patterns",
    author: "Michael Chan",
    url: "https://reactpatterns.com/",
    likes: 7,
    __v: 0
  },
  {
    _id: "5a422aa71b54a676234d17f8",
    title: "Go To Statement Considered Harmful",
    author: "Edsger W. Dijkstra",
    url: "http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html",
    likes: 5,
    __v: 0
  },
  {
    _id: "5a422b3a1b54a676234d17f9",
    title: "Canonical string reduction",
    author: "Edsger W. Dijkstra",
    url: "http://www.cs.utexas.edu/~EWD/transcriptions/EWD08xx/EWD808.html",
    likes: 12,
    __v: 0
  },
  {
    _id: "5a422b891b54a676234d17fa",
    title: "First class tests",
    author: "Robert C. Martin",
    url: "http://blog.cleancoder.com/uncle-bob/2017/05/05/TestDefinitions.htmll",
    likes: 10,
    __v: 0
  },
  {
    _id: "5a422ba71b54a676234d17fb",
    title: "TDD harms architecture",
    author: "Robert C. Martin",
    url: "http://blog.cleancoder.com/uncle-bob/2017/03/03/TDD-Harms-Architecture.html",
    likes: 0,
    __v: 0
  },
  {
    _id: "5a422bc61b54a676234d17fc",
    title: "Type wars",
    author: "Robert C. Martin",
    url: "http://blog.cleancoder.com/uncle-bob/2016/05/01/TypeWars.html",
    likes: 2,
    __v: 0
  }  
]
beforeEach(async () => {  
  await Blog.deleteMany({})  
  let blogObject = new Blog(initialTowBlogs[0])
  console.log("blogObject 1:",blogObject)
  await blogObject.save() 
  blogObject = new Blog(initialTowBlogs[1])
  console.log("blogObject 2:",blogObject)
  await blogObject.save()
  })

test('blogs are returned as json', async () => {
  const respons = await api
    .get('/api/blogs')
    .expect(200)
    .expect('Content-Type', /application\/json/)
    console.log("respons body return as json :",respons.body)
  }
,100000)

test('a specific blog is within the returned blogs', async () => {
  const response = await api.get('/api/blogs')
  const contents = response.body.map(r => r.url)  
  expect(contents).toContain(
    'https://reactpatterns.com/'
  )
})

// 4.8: Blog list tests, step1
test('all blogs are returned in the JSON format', async () => {
  const response = await api.get('/api/blogs')
  .expect(200)
  .expect('Content-Type', /application\/json/)
  expect(response.body).toHaveLength(initialTowBlogs.length)
},100000)

test('verifies that the unique identifier property of the blog posts is named id', async () => {
  const response = await api.get('/api/blogs')
  .expect(200)
  .expect('Content-Type', /application\/json/)
  expect('id').toBeDefined()
  console.log("response.body :",response.body)
})

test('a valid blog can be added', async () => {
  const newBlog = {
    title: "async/await simplifies making async calls",
    author: "Robert C. Martin",
    url: "https://javascript.info/async-await",
    likes: 0,
  }

  await api
    .post('/api/blogs')
    .send(newBlog)
    .expect(201)
    .expect('Content-Type', /application\/json/)

  const response = await api.get('/api/blogs')

  const contents = response.body.map(r => r.title)

  expect(response.body).toHaveLength(initialTowBlogs.length + 1)
  expect(contents).toContain('async/await simplifies making async calls')
})

test('blog without content is not added', async () => {
  const newBlog = {
    title: "async/await simplifies making async calls",
    author: "Robert C. Martin",
    url: "https://javascript.info/async-await",
    likes: 0,
  }


  await api
    .post('/api/notes')
    .send(newNote)
    .expect(400)

  const response = await api.get('/api/notes')
  expect(response.body).toHaveLength(initialNotes.length)
})

afterAll(() => {
  mongoose.connection.close()
})