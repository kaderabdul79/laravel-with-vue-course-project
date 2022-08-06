<template>
    <div v-if="category">
        <router-view :category="category"></router-view>
    </div>
</template>

<script>
    import CourseServices from '@/services/CourseServices.js';
    export default {
        props: ['id'],
        data(){
        return {
            category: null,
        }
        },
    created(){
        CourseServices.getCategory(this.id)
        .then(res => {
            this.category = res.data.category
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