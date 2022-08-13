<template>
  <div class="container-fluid">
    <h1>Edit Course</h1>
    <div v-if="course">
      <form @submit.prevent="editCourseById">
        <div class="form-group row">
          <div class="col-sm-6 mb-3 mb-sm-0">
            <input type="text" v-model="course.name" class="form-control mb-3" placeholder="course Name">
            <!-- category -->
            <div class="field">
              <label>Select Category</label>
              <select v-model="course.category_id">
                <option v-for="cat in categories" :key="cat.id" :value="cat.id">{{ cat.name }}</option>
              </select>
            </div>
            <!-- description -->
            <textarea rows="4" v-model="course.description" class="form-control mb-3" placeholder="Write description"></textarea>
            <!-- Status -->
            Status
            <div class="form-check col-sm-6 mb-3 mb-sm-0">
              <input class="form-check-input" v-model="course.status" value="1" :checked="course.status == 1 ? true : false" type="radio">Published
              <input class="form-check-input" v-model="course.status" value="0" :checked="course.status == 0 ? true : false" type="radio">Unpublish
            </div>
            <input type="text" v-model="course.price" class="form-control mb-3" placeholder="course fee">
            <input type="file" class="form-control" >
            
          </div>
        </div>
        <button type="submit" class="d-none d-sm-inline-block btn btn-lg btn-primary">Submit</button>
      </form>
    </div>
  </div>
  </template>
  
  <script>
import {Courses , Categories} from "@/services/ServicesProvider.js";

  export default {
    props: ['course'],
      data(){
         return {
          categories: ''
         }
      },
    created(){
      Categories.getCategories()
      // .then(res => console.log(res.data.data))
      .then(res => {this.categories = res.data.data})
      .catch(error => console.log(error))
    },
    methods:{
      editCourseById(){
        Courses.updateCourse(this.course.id,this.course)
        .then(res => {
           console.log(res.data.data)
          })
        .catch(error =>  console.log(error))
      }
    },
    computed:{},
  }
  </script>
  
  <style scoped>
  
  </style>