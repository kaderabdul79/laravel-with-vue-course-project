<template>
        <div class="container-fluid">

<!-- Page Heading -->
<h1 class="h3 mb-2 text-gray-800">All Courses List</h1>

<!-- DataTales Example -->
<div class="card shadow mb-4">
  <div class="card-header py-3">
    <router-link :to="{name: 'CourseCreate'}" class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm">Create New Course</router-link>
  </div>
  <div class="card-body">
    <div class="table-responsive">
      <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
        <thead>
          <tr>
            <th>Id</th>
            <th>Code</th>
            <th>Name</th>
            <th>Category Name</th>
            <th>Description</th>
            <th>Thumbnail</th>
            <th>Price</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(course,index) in courses" :key="course.id">
            <td>{{++index}}</td>
            <td>{{course.code}}</td>
            <td>{{course.name}}</td>
            <td>{{course.category.name}}</td>
            <td>{{course.description}}</td>
            <td>
              <img :src="course.image" alt="course thumbnail">
            </td>
            <td>{{course.price}} Tk.</td>
            <td>{{course.status == 1 ? 'Active' : 'Inactive'}}</td>
            <td>
              <router-link :to="{name: 'CourseEdit',params: {id: course.id}}" class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm">Edit</router-link>
              <router-link @click="deleteCourse(course.id)" to="" class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm">Delete</router-link>
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
      courses: [],
    }
  },
  created(){
    CourseServices.getCourses()
    .then(res => this.courses = res.data.courses)
    .catch(error => console.log(error))
  },
  methods:{
    deleteCourse(id){
      if(confirm("Are you sure to delete this course ?")){
        CourseServices.deleteCourse(id)
        .then(res=>{
          if(res.status == 200){this.$router.push({name: 'manageCourse'})}
        })
        .catch(error=>{console.log(error)})
      }
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