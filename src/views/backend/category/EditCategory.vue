<template>
  <div class="container-fluid">
    <h1 class="h3 mb-2 text-gray-800">Edit Category</h1>
    <div v-if="category">
      <form @submit.prevent="updateCategory">{{category}}
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
  </div>  
  </template>
  
  <script>
import {Courses , Categories} from "@/services/ServicesProvider.js";

  export default {
    props: ['category'],
      data(){
         return {
          
         }
      },
    created(){},
    methods:{
      updateCategory(){
        Categories.updateCategory(this.category.id,this.category)
        .then(res => console.log(res.data.data))
        .catch(error => console.log(error))
      }
    },
    computed:{},
  }
  </script>
  