<template>
    <div v-if="category">
        <router-view :category="category"></router-view>
    </div>
</template>

<script>
import {Courses,Categories} from "@/services/ServicesProvider.js";
    export default {
        props: ['id'],
        data(){
        return {
            category: null,
        }
        },
    created(){
        Categories.getCategory(this.id)
        .then(res => {
            this.category = res.data.data
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