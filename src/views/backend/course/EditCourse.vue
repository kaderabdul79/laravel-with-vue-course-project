<template>
  <div class="container-fluid">
    <h1>Edit Course</h1>
    <div v-if="course">
      {{course.category}}
      <form @submit.prevent="">
        <div class="form-group row">
          <div class="col-sm-6 mb-3 mb-sm-0">
            <input type="text" :value="course.name" class="form-control mb-3" placeholder="course Name">
            <input type="text" :value="course.category.name" class="form-control mb-3" placeholder="category Name">
            <input type="text" :value="course.code" class="form-control mb-3" placeholder="course slug">
            <textarea rows="4" :value="course.description" class="form-control mb-3" placeholder="Write description"></textarea>
            Status
            <div class="form-check col-sm-6 mb-3 mb-sm-0">
              <input class="form-check-input" value="1" type="radio" name="status">Published
              <input class="form-check-input" value="0" type="radio" name="status">Unpublish
            </div>
            <input type="text" :value="course.price" class="form-control mb-3" placeholder="course fee">
            <input type="file" class="form-control" >
            
          </div>
        </div>
        <button type="submit" class="d-none d-sm-inline-block btn btn-lg btn-primary">Submit</button>
      </form>
    </div>
  </div>
  </template>
  
  <script>
  export default {
    props: ['course'],
      data(){
         return {
          
         }
      },
    created(){},
    methods:{},
    computed:{},
  }
  </script>
  
  <style scoped>
  
  </style>