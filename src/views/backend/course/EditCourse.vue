<template>
  <div class="container-fluid">
    <h1>Edit Course</h1>
    <div v-if="course">
      <form @submit.prevent="editCourseById">
        <div class="form-group row">
          <div class="col-sm-6 mb-3 mb-sm-0">
            <input type="text" v-model="course.name" class="form-control mb-3" placeholder="course Name">
            <div v-if="form.errors.has('name')" v-html="form.errors.get('name')" class="text-danger mb-2"></div>
            <!-- category -->
            <div class="field">
              <label>Select Category</label>
              <select v-model="form.categories.category_id">
                <option v-for="cat in form.categories" :key="cat.id" :value="cat.id">{{ cat.name }}</option>
              </select>
            </div>
            <div v-if="form.errors.has('category_id')" v-html="form.errors.get('category_id')" class="text-danger mb-2"></div>

            <!-- description -->
            <textarea rows="4" v-model="course.description" class="form-control mb-3" placeholder="Write description"></textarea>
            <div v-if="form.errors.has('description')" v-html="form.errors.get('description')" class="text-danger mb-2"></div>

            <!-- Status -->
            Status
            <div class="form-check col-sm-6 mb-3 mb-sm-0">
              <input class="form-check-input" v-model="course.status" value="1" :checked="course.status == 1 ? true : false" type="radio">Published
              <input class="form-check-input" v-model="course.status" value="0" :checked="course.status == 0 ? true : false" type="radio">Unpublish
            </div>
            <!-- price -->
            <input type="text" v-model="course.price" class="form-control mb-3" placeholder="course fee">
            <div v-if="form.errors.has('price')" v-html="form.errors.get('price')" class="text-danger mb-2"></div>

            <!-- <input type="file" class="form-control" > -->
            
          </div>
        </div>
        <button type="submit" :disabled="form.busy" class="d-none d-sm-inline-block btn btn-lg btn-primary">Submit</button>
      </form>
    </div>
  </div>
  </template>
  
  <script>
  import {Courses , Categories} from "@/services/ServicesProvider.js";
  import Form from 'vform';

  export default {
    props: ['course'],
      data(){
         return {
          form: new Form({
            categories: ''
          })
         }
      },
    created(){
      Categories.getCategories()
      // .then(res => console.log(res.data.data))
      .then(res => {this.form.categories = res.data.data})
      .catch(error => console.log(error))
    },
    methods:{
      editCourseById(){
        Courses.updateCourse(this.course.id,this.course)
        .then(res => {
          //  console.log(res.data)
            // showing alert message
            this.$swal.fire({position: 'top-end',icon: 'success',title: res.data.message,timer: 2000})
            this.$router.push({name:'manageCourse'})
          })
        .catch(error => {
          // console.log(error)
          this.form.errors.errors = error.response.data.errors
          this.$swal.fire({position: 'top-end',icon: 'error',title: error.message,timer: 2000})
        })
      }
    },
    computed:{},
  }
  </script>
  
  <style scoped>
  
  </style>