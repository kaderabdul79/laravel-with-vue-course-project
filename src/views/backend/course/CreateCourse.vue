<template>
  <div class="container-fluid">
    <!-- Page Heading -->
    <h1 class="h3 mb-2 text-gray-800">Add New Course</h1>

    <form class="user" @submit.prevent="">
      <div class="form-group row">
        <div class="col-sm-6 mb-3 mb-sm-0">
          <input type="text" name="name" class="form-control form-control-user" placeholder="Course Name">
        </div>
        <div class="col-sm-6">
          <input type="textarea" name="description" class="form-control form-control-user" placeholder="Write description">
        </div>
      </div>
      <div class="form-group">
        <input type="text" name="code" class="form-control form-control-user" placeholder="Course Code">
      </div>
      <div class="form-group row">
        <div class="col-sm-4 mb-3 mb-sm-0">
          <input type="text" name="price" class="form-control form-control-user" placeholder="Course Price">
        </div>
        <div class="form-group col-sm-4">
          <input type="text" name="code" class="form-control form-control-user" placeholder="Course Code">
        </div>
        <div class="mb-3 col-sm-4">
          <input type="file" class="form-control" name="" id="" placeholder="" aria-describedby="fileHelpId">
        </div>
      </div>
        Status
        <div class="form-check ">
          <input class="form-check-input" type="radio" name="status">Published
          <input class="form-check-input" type="radio" name="status">Unpublish
        </div>
        <button type="submit" class="d-none d-sm-inline-block btn btn-lg btn-primary shadow-lg">Submit</button>
    </form>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>