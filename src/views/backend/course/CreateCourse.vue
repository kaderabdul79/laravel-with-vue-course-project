<template>
  <div class="container-fluid">
    <!-- Page Heading -->
    <h1 class="h3 mb-2 text-gray-800">Add New Course</h1>{{form.errors}}
    <form @submit.prevent="submitNewCourse">
      {{form.course}}
        <div class="form-group row">
          <div class="col-sm-6 mb-3 mb-sm-0">
            <input type="text" v-model="form.course.name" class="form-control mb-3" placeholder="course Name">
            <div v-if="form.errors.has('name')" v-html="form.errors.get('name')" class="text-danger mb-2"></div>

            <input type="text" v-model="form.course.code" class="form-control mb-3" placeholder="course code">
            <div v-if="form.errors.has('code')" v-html="form.errors.get('code')" class="text-danger mb-2"></div>

            <!-- category  -->
            <div class="field">
              <label>Select Category</label>
              <select v-model="form.course.category_id">
                <option v-for="cat in form.categories" :key="cat.id" :value="cat.id">{{ cat.name }}</option>
              </select>
            </div>
            <div v-if="form.errors.has('category_id')" v-html="form.errors.get('category_id')" class="text-danger mb-2"></div>

            <!-- description -->
            <textarea rows="4" v-model="form.course.description" class="form-control mb-3" placeholder="Write description"></textarea>
            <div v-if="form.errors.has('description')" v-html="form.errors.get('description')" class="text-danger mb-2"></div>

            <!-- Status -->
            Status
            <div class="form-check col-sm-6 mb-3 mb-sm-0">
              <input v-model="form.course.status" value="1" class="form-check-input" type="radio">Published
              <input v-model="form.course.status" value="0" class="form-check-input" type="radio">Unpublish
            </div>

            <!-- price -->
            <input type="text" v-model="form.course.price" class="form-control mb-3" placeholder="course fee">
            <div v-if="form.errors.has('price')" v-html="form.errors.get('price')" class="text-danger mb-2"></div>
            
            <!-- course thumbnail image -->
            <!-- <input type="file" v-on:change="handleonChange" class="form-control" >
            <div v-if="form.errors.has('code')" v-html="form.errors.get('code')" class="text-danger mb-2"></div> -->

          </div>
        </div>
        <button type="submit" :disabled="form.busy" class="d-none d-sm-inline-block btn btn-lg btn-primary">Submit</button>
      </form>
  </div>
</template>

<script>
import {Courses , Categories} from "@/services/ServicesProvider.js";
import Form from 'vform'

export default {
  data(){
      return {
        form: new Form({
            course: this.createNewCourse(),
            categories: '',
        })
      }
  },
  created(){
    Categories.getCategories()
    .then(res => {this.form.categories = res.data.data})
    .catch(error => console.log(error))
  },
  methods:{
    createNewCourse(){
      return {
        name: '',
        code: '',
        category_id: null,
        description: '',
        status: 1,
        price: null,
      }
    },
    handleonChange(e){
      this.course.image = e.target.files[0];
      // console.log(e.target.files[0])
    },
    submitNewCourse(){
      // let a = this;
      Courses.createCourse(this.form.course)
      .then(res => {
        // showing alert message
        this.$swal.fire({position: 'top-end',icon: 'success',title: res.data.message,timer: 2000})
        // console.log(res.data)
        // clear the input value and errors
        this.form.course = this.createNewCourse();
        this.form.errors.errors = ""
       })
      .catch(error =>  {
        // console.log(error.response.data.message)
        this.form.errors.errors = error.response.data.errors
        // showing error message
        this.$swal.fire({position: 'top-end',icon: 'error',title: error.message,timer: 2000})
        }
      )
    }
  },
}
</script>

<style>

</style>