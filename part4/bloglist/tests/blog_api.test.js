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
// 4.8: Blog list tests, step1
test('blogs are returned as json', async () => {
  const respons = await api
    .get('/api/blogs')
    .expect(200)
    .expect('Content-Type', /application\/json/)
    console.log("respons body return as json :",respons.body)
  }
,100000)

// 4.8: Blog list tests, step1
test('all blogs are returned', async () => {
  const response = await api.get('/api/blogs')
  .expect(200)
  .expect('Content-Type', /application\/json/)
  expect(response.body).toHaveLength(helper.initialBlogs.length)
},100000)

test('a specific blog is within the returned blogs', async () => {
  const response = await api.get('/api/blogs')
  const contents = response.body.map(r => r.url)  
  expect(contents).toContain(
    'https://reactpatterns.com/'
  )
})

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

  const blogsAtEnd = await helper.blogInDb()
  expect(blogsAtEnd).toHaveLength(helper.initialBlogs.length + 1)
  
  const title = response.body.map(n => n.title)
  expect(title).toContain(
    'React patterns'
    )
})

test('blog without content is not added', async () => {
  const newBlog = {
    likes: 0
  }

  await api
    .post('/api/blogs')
    .send(newBlog)
    .expect(201)

  const blogsAtEnd = await helper.blogInDb()
  expect(blogsAtEnd).toHaveLength(helper.initialBlogs.length +1 )
})

test('verifies that if the likes property is missing from the request', async () => {
  const newBlog = {
    author: "Andrzej Sapkowski"
  }

  const blogsAtEnd = await api
    .post('/api/blogs')
    .send(newBlog)
    .expect(201)

  console.log('body: ',blogsAtEnd.body)
  expect(blogsAtEnd.body).toHaveProperty('likes')
})

await api.post('/api/blogs', async (request, response) => {
  const blog = await Blog.findById(response.body.id)
  if (blog) {
    response.json(blog)
  } else {
    response.status(400).end()
  }
})

afterAll(() => {
  mongoose.connection.close()
})