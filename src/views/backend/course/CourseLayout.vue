<template>
  <div v-if="course">
      <router-view :course="course"></router-view>
  </div>
</template>

<script>
import {Courses , Categories} from "@/services/ServicesProvider.js";
  export default {
      props: ['id'],
      data(){
      return {
          course: null,
      }
      },
      created(){
        Courses.getCourse(this.id)
        .then(res => {
            this.course = res.data.data
        })
        .catch(error => {
            console.log(error)
        })  
      },
  methods:{},
  computed:{},
  }
</script>

<style scoped>

</style>