<template>
  <div class="container-fluid">
    <h1 class="h3 mb-2 text-gray-800">Create New Category</h1>
    <form @submit.prevent="createCategory">{{category}}
        <div class="form-group row">
          <div class="col-sm-6 mb-3 mb-sm-0">
            <input type="text" v-model="category.name" name="name" class="form-control mb-3" placeholder="category Name">
            <textarea rows="4" v-model="category.description" name="description" class="form-control mb-3" placeholder="Write description"></textarea>
            <div class="form-check col-sm-6 mb-3 mb-sm-0">
              <input class="form-check-input" v-model="category.status" value="1" type="radio" name="status">Published
              <input class="form-check-input" v-model="category.status" value="0" type="radio" name="status">Unpublish
            </div>
          </div>
        </div>
        <button type="submit" class="d-none d-sm-inline-block btn btn-lg btn-primary">Submit</button>
      </form>
    </div>  
  </template>
  
  <script>
import CourseServices from '../../../services/CourseServices.js';

  export default {
      data(){
         return {
          category: {
            name: "",
            description: "",
            status: 1
          }
         }
      },
    created(){},
    methods:{
      createCategory(){
        // console.log('data')
        CourseServices.createCategory(this.category)
        .then(res => console.log(res.data.data))
        .catch(error => console.log(data))
      }
    },
    computed:{},
  }
  </script>
  
  <style scoped>
  
  </style>