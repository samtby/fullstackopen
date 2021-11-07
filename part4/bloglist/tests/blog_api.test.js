const supertest = require('supertest')
const mongoose = require('mongoose')
const helper = require('./test_helper')

const app = require('../app')
const api = supertest(app)
const Blog = require('../models/blog')
const blog = require('../models/blog')


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
describe('when there is initially some blogs saved', () => {
  test('blogs are returned as json', async () => {
    const respons = await api
      .get('/api/blogs')
      .expect(200)
      .expect('Content-Type', /application\/json/)
      expect(response.body).toHaveLength(helper.initialBlogs.length)
      console.log("respons body return as json :",respons.body)
    }
  ,100000)

  test('verifies that the unique identifier property of the blog posts is named id', async () => {
    const response = await api.get('/api/blogs')
    .expect(200)
    .expect('Content-Type', /application\/json/)
    response.body.forEach(blog => {
      expect(blog.id).toBeDefined();
    })
  })

/*
 test('a specific blog is within the returned blogs', async () => {
      const response = await api.get('/api/blogs')
      const contents = response.body.map(r => r.url)  
      expect(contents).toContain(
        'https://reactpatterns.com/'
      )
    })
  })
*/
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

describe('addition of a new blog', () => {
  test('succeeds with a valid data', async () => {
    let newBlog = {
      title: "Le dernier voeu",
      author: "Andrzej Sapkowski",
      url: "https://www.babelio.com/auteur/Andrzej-Sapkowski/5111",
      likes: 0,
    }

    newBlog = await api
      .post('/api/blogs')
      .send(newBlog)
      .expect(201)

    const blogsAtEnd = await helper.blogInDb()
    expect(blogsAtEnd).toHaveLength(helper.initialBlogs.length +1 )
    newBlog = blogsAtEnd.find(blog => blog.id === newBlog.body.id )
    expect(newBlog.title).toContain('Le dernier voeu')
    expect(newBlog.author).toContain('Andrzej Sapkowski')
    expect(newBlog.url).toContain('https://www.babelio.com/auteur/Andrzej-Sapkowski/5111')    
  })
})
test('verifies that if the likes property is missing from the request', async () => {
  const newBlog = {
    title: "Le dernier voeu",
    author: "Andrzej Sapkowski",
    url: "https://www.babelio.com/auteur/Andrzej-Sapkowski/5111"
  }

  const blogsAtEnd = await api
    .post('/api/blogs')
    .send(newBlog)
    .expect(201)

  //console.log('body: ',blogsAtEnd.body)
  expect(blogsAtEnd.body).toHaveProperty('likes')
})

test('verifies that if the title and url properties are missing from the request data', async () => {
  const newBlog = { author: "Andrzej Sapkowski" }
  const response =  await api.post('/api/blogs')            
  //console.log("response.status: ", response.status, response.body)
  expect(response.status).toBe(400)
})
/*
describe('deletion of a blog', () => {
  test('succeeds with status code 204 if id is valid', async () => {
    const notesAtStart = await helper.notesInDb()
    const noteToDelete = notesAtStart[0]

    await api
      .delete(`/api/notes/${noteToDelete.id}`)
      .expect(204)

    const notesAtEnd = await helper.notesInDb()

    expect(notesAtEnd).toHaveLength(
      helper.initialNotes.length - 1
    )

    const contents = notesAtEnd.map(r => r.content)

    expect(contents).not.toContain(noteToDelete.content)
  })
})
*/
afterAll(() => {
  mongoose.connection.close()
})