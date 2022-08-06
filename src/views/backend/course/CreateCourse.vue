<template>
  <div class="container-fluid">
    <!-- Page Heading -->
    <h1 class="h3 mb-2 text-gray-800">Add New Course</h1>
    <form @submit.prevent="submitNewCourse">
      {{course}}
        <div class="form-group row">
          <div class="col-sm-6 mb-3 mb-sm-0">
            <input type="text" v-model="course.name" class="form-control mb-3" placeholder="course Name">
            <input type="text" v-model="course.slug" class="form-control mb-3" placeholder="course slug">
            <input type="text" v-model="course.code" class="form-control mb-3" placeholder="course code">
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
              <input v-model="course.status" value="1" class="form-check-input" type="radio" name="status">Published
              <input v-model="course.status" value="0" class="form-check-input" type="radio" name="status">Unpublish
            </div>
            <input type="text" v-model="course.price" class="form-control mb-3" placeholder="course fee">
            <!-- <input type="file" v-model="course.image" class="form-control" > -->
            
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
      course: this.createNewCourse(),
      categories: ''
    }
  },
  created(){
    CourseServices.getCategories()
    .then(res => this.categories = res.data.categories)
    .catch(error => console.log(error))
  },
  methods:{
    createNewCourse(){
      return {
        name: '',
        slug: '',
        code: '',
        category_id: null,
        description: '',
        status: 1,
        price: null,
        image: ''
      }
    },
    submitNewCourse(){
      // alert(data)
      CourseServices.createCourse(this.course)
      .then(res => console.log(res.data))
      .catch(error =>  console.log(error))
      // console.log(this.course);
    }
  },
  computed:{},
}
</script>

<style>

</style>