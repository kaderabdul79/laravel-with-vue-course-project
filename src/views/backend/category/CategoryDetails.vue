<template>
  <div class="container-fluid">
    <h1>Category Details</h1>
    <div v-if="category">
      <p>{{category.name}}</p>
      <p>{{category.slug}}</p>
      <p>{{category.description}}</p>
    </div>
  </div>  
  </template>
  
  <script>
  export default {
    props: ['category'],
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