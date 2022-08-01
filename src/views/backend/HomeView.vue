<template>
  <div id="page-top">
<!-- Page Wrapper -->
<div id="wrapper">

  <!-- Sidebar -->
      <Sidebar />
  <!-- End of Sidebar -->

  <!-- Content Wrapper -->
  <div id="content-wrapper" class="d-flex flex-column">

    <!-- Main Content -->
    <div id="content">

      <!-- Topbar -->
        <Topbar />
      <!-- End of Topbar -->

      <!-- Begin Page Content -->
        <MainContent />
      <!-- /.container-fluid -->

    </div>
    <!-- End of Main Content -->

    <!-- Footer -->
      <Footer />
    <!-- End of Footer -->

  </div>
  <!-- End of Content Wrapper -->

</div>
<!-- End of Page Wrapper -->


  </div>
</template>

<script>
import Sidebar from '../../components/backend/Sidebar.vue';
import Topbar from '../../components/backend/Topbar.vue';
import MainContent from '../../components/backend/MainContent.vue';
import Footer from '../../components/backend/Footer.vue';
export default {
    components: { Sidebar, Topbar, MainContent, Footer }
}
</script>

<style>

</style>