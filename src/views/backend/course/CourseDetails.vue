<template>
    <div class="container-fluid">
      <h1>course Details</h1>
      <div v-if="course">
        <p>{{course.name}}</p>
        <p>{{course.slug}}</p>
        <p>{{course.description}}</p>
      </div>
    </div>  
    </template>
    
    <script>
    export default {
      props: ['course'],
        data(){
           return {}
        },
      created(){},
      methods:{},
      computed:{},
    }
    </script>
    
    <style scoped>
    
    </style>