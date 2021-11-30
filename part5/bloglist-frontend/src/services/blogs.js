import axios from 'axios'
const baseUrl = '/api/blogs'

let token = null

const setToken = newToken => {  
  token = `bearer ${newToken}`
}

const getAll = () => {
  const request = axios.get(baseUrl)
  return request.then(response => response.data)
}

const create = async newObject => {
  const config = {
    headers: { Authorization: token },  
  }
  try {
    const response = await axios.post(baseUrl, newObject, config)
    return response.data  
  }catch(error) {
  console.log("error", error);
  return error.data
  // appropriately handle the error
  }
}

const update = (id, newObject) => {
  const request = axios.put(`${ baseUrl } /${id}`, newObject)
  return request.then(response => response.data)
  .catch(error => error.response.data)
}


export default { getAll, create, update, setToken }