<template>
  <div class="container-fluid">
    <h1>Edit Category</h1>
    <div v-if="category">
      <!-- {{category}} -->
      <form @submit.prevent="">
        <div class="form-group row">
          <div class="col-sm-6 mb-3 mb-sm-0">
            <input type="text" :value="category.name" name="name" class="form-control mb-3" placeholder="category Name">
            <input type="text" :value="category.slug" name="slug" class="form-control mb-3" placeholder="category slug">
            <textarea rows="4" :value="category.description" name="description" class="form-control mb-3" placeholder="Write description"></textarea>
            <div class="form-check col-sm-6 mb-3 mb-sm-0">
              <input class="form-check-input" :value="category.status" type="radio" name="status">Published
              <input class="form-check-input" :value="category.status" type="radio" name="status">Unpublish
            </div>
          </div>
        </div>
        <button type="submit" class="d-none d-sm-inline-block btn btn-lg btn-primary">Submit</button>
      </form>
    </div>
  </div>  
  </template>
  
  <script>
  export default {
    props: ['category'],
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