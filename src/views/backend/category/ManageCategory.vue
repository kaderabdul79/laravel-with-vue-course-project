<template>
        <div class="container-fluid">

<!-- Page Heading -->
<h1 class="h3 mb-2 text-gray-800">All Courses List</h1>

<!-- DataTales Example -->
<div class="card shadow mb-4">
  <div class="card-header py-3">
    <h6 class="m-0 font-weight-bold text-primary">Manage Courses</h6>
  </div>
  <div class="card-body">
    <div class="table-responsive">
      <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
        <thead>
          <tr>
            <th>Id</th>
            <th>Code</th>
            <th>Name</th>
            <th>Description</th>
            <th>Thumbnail</th>
            <th>Price</th>
            <th>Status</th>
          </tr>
        </thead>
        <!-- <tfoot>
          <tr>
            <th>Id</th>
            <th>Code</th>
            <th>Name</th>
            <th>Description</th>
            <th>Thumbnail</th>
            <th>Price</th>
            <th>Status</th>
          </tr>
        </tfoot> -->
        <tbody>
          <tr v-for="course in courses" :key="course.id">
            <td>{{course.id}}</td>
            <td>{{course.code}}</td>
            <td>{{course.name}}</td>
            <td>{{course.description}}</td>
            <td>
              <img :src="course.image" alt="course thumbnail">
            </td>
            <td>{{course.price}} Tk.</td>
            <td>{{course.status}}</td>
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
  methods:{},
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