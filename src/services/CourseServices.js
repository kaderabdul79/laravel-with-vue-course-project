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
  createCourse(course) {
    return apiClient.post('courses/create',course)
  },
  deleteCourse(id) {
    return apiClient.delete('courses/'+ id)
  },
  getCourse(id){
    return apiClient.get('courses/'+id)
  },
  // categories
  getCategories() {
    return apiClient.get('categories')
  },
  getCategory(id){
    return apiClient.get('categories/'+id)
  }
}
