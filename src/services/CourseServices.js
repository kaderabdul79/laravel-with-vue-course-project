import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'http://127.0.0.1:8000/api/',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

export default {
  getCourses() {
    return apiClient.get('courses')
  },
  deleteCourse(id) {
    return apiClient.delete('courses/'+ id)
  },
}
