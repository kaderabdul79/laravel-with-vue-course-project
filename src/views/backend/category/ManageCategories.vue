<template>
  <div class="container-fluid">

<!-- Page Heading -->
<h1 class="h3 mb-2 text-gray-800">All categories List</h1>

<!-- DataTales Example -->
<div class="card shadow mb-4">
  <div class="card-header py-3">
    <router-link :to="{name: 'CategoryCreate'}" class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm">Create New Category</router-link>
  </div>
<div class="card-body">
<div class="table-responsive">
<table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
  <thead>
    <tr>
      <th>Id</th>
      <th>Name</th>
      <th>Slug</th>
      <th>Description</th>
      <th>Status</th>
      <th>Action</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="category in categories" :key="category.id">
      <td>{{category.id}}</td>
      <td>{{category.name}}</td>
      <td>{{category.slug}}</td>
      <td>{{category.description}}</td>
      <td>{{category.status}}</td>
      <td>
        <router-link :to="{name: 'CategoryEdit',params: {id: category.id}}" class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm">Edit</router-link>
        <router-link :to="{name: 'CategoryDetails',params: {id: category.id}}" class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm">Details</router-link>
        <button @click="deleteCategory(category.id)" class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm">Delete</button>
      </td>
    </tr>
  </tbody>
</table>
</div>
</div>
</div>

</div>
</template>

<script>
import CourseServices from '@/services/CourseServices.js';
export default {
  data(){
  return {
  categories: [],
  }
  },
  created(){
    CourseServices.getCategories()
  .then(res => this.categories = res.data.data
  // console.log(res.data.data)
  // 
  )
  .catch(error => console.log(error))
  },
  methods:{
    deleteCategory(id){
      // console.log(id)
      CourseServices.deleteCategory(id)
      .then(res => console.log("deleted",res.data))
      .catch(error => console.log(error))
    }
  },
  computed:{},
  }
</script>

<style scoped>
img{
width: 60px;
height: 60px;
border-radius: 18px;
}
</style>