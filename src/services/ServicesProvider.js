import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'http://127.0.0.1:8000/api/',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

const Courses = {
  getCourses() {
    return apiClient.get('courses')
  },
  createCourse(course,config) {
    return apiClient.post('courses/create',course)
  },
  getCourse(id){
    return apiClient.get('courses/'+id)
  },
  updateCourse(id,course) {
    return apiClient.put('courses/'+ id +'/update',course)
  },
  deleteCourse(id) {
    return apiClient.delete('courses/'+ id)
  },
}

const Categories = {
  createCategory(category) {
    return apiClient.post('categories/create',category)
  },
  getCategories() {
    return apiClient.get('categories')
  },
  getCategory(id){
    return apiClient.get('categories/'+id)
  },
  updateCategory(id,data){
    // console.log('update',id,data)
    return apiClient.put('categories/'+ id +'/update',data)
  },
  deleteCategory(id) {
    return apiClient.delete('categories/'+ id)
  },
}

export {Courses , Categories}

// export default {
//   getCourses() {
//     return apiClient.get('courses')
//   },
//   createCourse(course) {
//     return apiClient.post('courses/create',course)
//   },
//   getCourse(id){
//     return apiClient.get('courses/'+id)
//   },
//   updateCourse(id,course) {
//     return apiClient.put('courses/'+ id +'/update',course)
//   },
//   deleteCourse(id) {
//     return apiClient.delete('courses/'+ id)
//   },
//   // categories
//   createCategory(category) {
//     return apiClient.post('categories/create',category)
//   },
//   getCategories() {
//     return apiClient.get('categories')
//   },
//   getCategory(id){
//     return apiClient.get('categories/'+id)
//   },
//   updateCategory(id,data){
//     // console.log('update',id,data)
//     return apiClient.put('categories/'+ id +'/update',data)
//   },
//   deleteCategory(id) {
//     return apiClient.delete('categories/'+ id)
//   },
// }
