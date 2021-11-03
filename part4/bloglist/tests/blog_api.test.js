const supertest = require('supertest')
const mongoose = require('mongoose')
const helper = require('./test_helper')

const app = require('../app')
const api = supertest(app)

const Blog = require('../models/blog')

beforeEach(async () => {  
  await Blog.deleteMany({})  
  let blogObject = new Blog(helper.initialBlogs[0])
  console.log("blogObject 1:",blogObject)
  await blogObject.save() 
  blogObject = new Blog(helper.initialBlogs[1])
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
  expect(response.body).toHaveLength(helper.initialBlogs.length)
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

  expect(response.body).toHaveLength(helper.initialBlogs.length + 1)
  const title =. map(n => n.title
  expect(contents).toContain.map(n => n.title'async/await simplifies making async calls')
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